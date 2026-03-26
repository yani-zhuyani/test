/**
 * DataInsight — 图表交互与 UI 交互逻辑
 * 遵循 Material Design 2 动效规范
 * - Standard easing: cubic-bezier(0.4, 0.0, 0.2, 1)
 * - Decelerate easing: cubic-bezier(0.0, 0.0, 0.2, 1)
 */

'use strict';

/* ================================================
   工具函数
   ================================================ */

/**
 * 格式化数字（带千分位）
 */
function formatNumber(num) {
  if (num >= 10000000) return (num / 10000000).toFixed(1) + '亿';
  if (num >= 10000) return (num / 10000).toFixed(1) + '万';
  return num.toLocaleString('zh-CN');
}

/**
 * 缓动函数：easeOutCubic（对应 MD Decelerate easing）
 */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* ================================================
   数字计数动画 (KPI 卡片)
   使用 requestAnimationFrame，持续 ~1200ms
   ================================================ */
function animateCounter(el, target, duration = 1200, suffix = '') {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = isFloat
      ? (eased * target).toFixed(1)
      : Math.round(eased * target).toLocaleString('zh-CN');

    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/**
 * 初始化 KPI 卡片计数动画（IntersectionObserver 触发）
 */
function initKpiCounters() {
  const cards = document.querySelectorAll('.metric-card__value[data-target]');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          const target = parseFloat(entry.target.dataset.target);
          const suffix = entry.target.dataset.suffix || '';
          animateCounter(entry.target, target, 1200, suffix);
        }
      });
    },
    { threshold: 0.4 }
  );

  cards.forEach((card) => observer.observe(card));
}

/* ================================================
   折线图 (Line Chart)
   Canvas 2D API 手绘，无依赖
   ================================================ */
function drawLineChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // 设置 HiDPI
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const W = rect.width || canvas.width;
  const H = rect.height || canvas.height;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(dpr, dpr);

  const padLeft = 48;
  const padRight = 16;
  const padTop = 16;
  const padBottom = 36;
  const chartW = W - padLeft - padRight;
  const chartH = H - padTop - padBottom;

  // 模拟 7 天数据（百万条）
  const labels = ['3/13', '3/14', '3/15', '3/16', '3/17', '3/18', '3/19'];
  const dataA = [52, 61, 58, 74, 69, 80, 86]; // 主要指标
  const dataB = [34, 38, 42, 45, 50, 48, 56]; // 对比指标

  const maxVal = Math.max(...dataA, ...dataB) * 1.15;

  function toX(i) { return padLeft + (i / (labels.length - 1)) * chartW; }
  function toY(v) { return padTop + chartH - (v / maxVal) * chartH; }

  // 绘制网格线
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.lineWidth = 1;
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = padTop + (i / gridLines) * chartH;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(padLeft + chartW, y);
    ctx.stroke();

    // Y 轴标签
    const val = Math.round(maxVal * (1 - i / gridLines));
    ctx.fillStyle = 'rgba(0, 0, 0, 0.38)';
    ctx.font = '11px Roboto, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(val + 'M', padLeft - 6, y + 4);
  }

  // X 轴标签
  labels.forEach((label, i) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.38)';
    ctx.font = '11px Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, toX(i), H - padBottom + 18);
  });

  // 绘制渐变填充区域 (dataA)
  const gradientA = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
  gradientA.addColorStop(0, 'rgba(98, 0, 238, 0.2)');
  gradientA.addColorStop(1, 'rgba(98, 0, 238, 0.0)');

  ctx.beginPath();
  dataA.forEach((v, i) => {
    if (i === 0) ctx.moveTo(toX(i), toY(v));
    else {
      // 平滑贝塞尔曲线
      const prevX = toX(i - 1);
      const prevY = toY(dataA[i - 1]);
      const currX = toX(i);
      const currY = toY(v);
      const cpX = (prevX + currX) / 2;
      ctx.bezierCurveTo(cpX, prevY, cpX, currY, currX, currY);
    }
  });
  ctx.lineTo(toX(dataA.length - 1), padTop + chartH);
  ctx.lineTo(padLeft, padTop + chartH);
  ctx.closePath();
  ctx.fillStyle = gradientA;
  ctx.fill();

  // 绘制折线 (dataB)
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(3, 218, 198, 0.7)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  dataB.forEach((v, i) => {
    if (i === 0) ctx.moveTo(toX(i), toY(v));
    else {
      const prevX = toX(i - 1);
      const prevY = toY(dataB[i - 1]);
      const currX = toX(i);
      const currY = toY(v);
      const cpX = (prevX + currX) / 2;
      ctx.bezierCurveTo(cpX, prevY, cpX, currY, currX, currY);
    }
  });
  ctx.stroke();
  ctx.setLineDash([]);

  // 绘制折线 (dataA)
  ctx.beginPath();
  ctx.strokeStyle = '#6200EE';
  ctx.lineWidth = 2.5;
  dataA.forEach((v, i) => {
    if (i === 0) ctx.moveTo(toX(i), toY(v));
    else {
      const prevX = toX(i - 1);
      const prevY = toY(dataA[i - 1]);
      const currX = toX(i);
      const currY = toY(v);
      const cpX = (prevX + currX) / 2;
      ctx.bezierCurveTo(cpX, prevY, cpX, currY, currX, currY);
    }
  });
  ctx.stroke();

  // 绘制数据点
  dataA.forEach((v, i) => {
    const x = toX(i);
    const y = toY(v);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#6200EE';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  dataB.forEach((v, i) => {
    const x = toX(i);
    const y = toY(v);
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#03DAC6';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // 图例
  const legendY = padTop - 6;
  ctx.fillStyle = '#6200EE';
  ctx.fillRect(padLeft, legendY - 6, 16, 3);
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.font = '11px Roboto, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('本周写入量', padLeft + 20, legendY);

  ctx.strokeStyle = 'rgba(3, 218, 198, 0.8)';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(padLeft + 120, legendY - 5);
  ctx.lineTo(padLeft + 136, legendY - 5);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillText('上周写入量', padLeft + 140, legendY);
}

/* ================================================
   饼图 (Pie Chart)
   Canvas 2D API 手绘，带动画
   ================================================ */
function drawPieChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const size = 200;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const radius = 78;
  const innerRadius = 44; // 环形图

  const data = [
    { label: 'MySQL', value: 38, color: '#6200EE' },
    { label: 'Kafka', value: 25, color: '#03DAC6' },
    { label: 'HDFS', value: 18, color: '#FF6D00' },
    { label: 'API', value: 12, color: '#1976D2' },
    { label: '其他', value: 7, color: '#43A047' },
  ];

  const total = data.reduce((s, d) => s + d.value, 0);
  let hoveredIndex = -1;

  function drawChart(progress = 1) {
    ctx.clearRect(0, 0, size, size);

    let startAngle = -Math.PI / 2;
    data.forEach((item, i) => {
      const sliceAngle = (item.value / total) * Math.PI * 2 * progress;
      const endAngle = startAngle + sliceAngle;
      const isHovered = i === hoveredIndex;
      const offset = isHovered ? 6 : 0;

      const midAngle = startAngle + sliceAngle / 2;
      const ox = offset * Math.cos(midAngle);
      const oy = offset * Math.sin(midAngle);

      // 扇区
      ctx.beginPath();
      ctx.moveTo(cx + ox, cy + oy);
      ctx.arc(cx + ox, cy + oy, radius, startAngle, endAngle);
      ctx.lineTo(cx + ox, cy + oy);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      // 内圆挖空
      ctx.beginPath();
      ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      startAngle = endAngle;
    });

    // 中心文字
    if (progress >= 1) {
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.font = '500 12px Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('数据源', cx, cy - 8);
      ctx.font = '700 18px Roboto, sans-serif';
      ctx.fillStyle = 'rgba(0,0,0,0.87)';
      ctx.fillText('5 类', cx, cy + 10);
    }
  }

  // 入场动画（持续 600ms，减速缓动）
  const start = performance.now();
  const duration = 800;
  function animate(now) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(t);
    drawChart(eased);
    if (t < 1) requestAnimationFrame(animate);
    else drawChart(1);
  }
  requestAnimationFrame(animate);

  // Hover 交互
  function getHoveredSlice(mx, my) {
    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < innerRadius || dist > radius + 8) return -1;
    let angle = Math.atan2(dy, dx) + Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;
    let startAngle = 0;
    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (data[i].value / total) * Math.PI * 2;
      if (angle >= startAngle && angle < startAngle + sliceAngle) return i;
      startAngle += sliceAngle;
    }
    return -1;
  }

  canvas.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const idx = getHoveredSlice(mx, my);
    if (idx !== hoveredIndex) {
      hoveredIndex = idx;
      drawChart(1);
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredIndex = -1;
    drawChart(1);
  });
}

/* ================================================
   Tab 切换（时间范围）
   持续 100ms Short transition
   ================================================ */
function initTabGroups() {
  document.querySelectorAll('.tab-group').forEach((group) => {
    const tabs = group.querySelectorAll('.tab-btn');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('tab-btn--active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('tab-btn--active');
        tab.setAttribute('aria-selected', 'true');

        // 模拟重绘折线图（实际项目中按范围重新请求数据）
        setTimeout(() => drawLineChart('lineChart'), 150);
      });
    });
  });
}

/* ================================================
   侧边导航开关（移动端）
   动效 250ms，使用 decelerate easing
   ================================================ */
function initNavDrawer() {
  const toggle = document.getElementById('sidebarToggle');
  const drawer = document.getElementById('navDrawer');
  const scrim = document.getElementById('scrim');

  if (!toggle || !drawer) return;

  let isOpen = window.innerWidth >= 905;

  function openDrawer() {
    drawer.classList.add('nav-drawer--open');
    scrim.classList.add('scrim--visible');
    isOpen = true;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('nav-drawer--open');
    scrim.classList.remove('scrim--visible');
    isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    isOpen ? closeDrawer() : openDrawer();
  });

  scrim.addEventListener('click', closeDrawer);

  // 键盘 ESC 关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen && window.innerWidth < 905) closeDrawer();
  });

  // 窗口 resize 自动处理
  const mq = window.matchMedia('(max-width: 904px)');
  mq.addEventListener('change', (e) => {
    if (!e.matches) {
      drawer.classList.remove('nav-drawer--open');
      scrim.classList.remove('scrim--visible');
    }
  });
}

/* ================================================
   告警关闭
   退出动画：accelerate easing 200ms
   ================================================ */
function initAlertDismiss() {
  document.querySelectorAll('.alert-item .icon-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const alertEl = btn.closest('.alert-item');
      if (!alertEl) return;
      alertEl.style.transition = 'opacity 200ms cubic-bezier(0.4, 0.0, 1, 1), transform 200ms cubic-bezier(0.4, 0.0, 1, 1)';
      alertEl.style.opacity = '0';
      alertEl.style.transform = 'translateX(24px)';
      setTimeout(() => {
        alertEl.style.transition = 'max-height 200ms cubic-bezier(0.4, 0.0, 1, 1), margin 200ms';
        alertEl.style.maxHeight = alertEl.offsetHeight + 'px';
        requestAnimationFrame(() => {
          alertEl.style.maxHeight = '0';
          alertEl.style.marginTop = '0';
          alertEl.style.overflow = 'hidden';
        });
        setTimeout(() => alertEl.remove(), 200);
      }, 200);
    });
  });
}

/* ================================================
   FAB 涟漪效果 (Ripple)
   Material Design 交互反馈
   ================================================ */
function addRipple(el, color = 'rgba(255,255,255,0.4)') {
  el.addEventListener('click', (e) => {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const wave = document.createElement('span');
    wave.classList.add('ripple-wave');
    wave.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background-color: ${color};
    `;

    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(wave);
    setTimeout(() => wave.remove(), 600);
  });
}

function initRipples() {
  document.querySelectorAll('.btn--contained, .fab').forEach((el) => addRipple(el));
  document.querySelectorAll('.btn--outlined').forEach((el) => addRipple(el, 'rgba(98,0,238,0.12)'));
}

/* ================================================
   Snackbar 提示
   进入: decelerate 250ms
   退出: accelerate 200ms
   ================================================ */
function showSnackbar(message, actionText = '知道了', duration = 4000) {
  const sb = document.getElementById('snackbar');
  if (!sb) return;
  sb.querySelector('.snackbar__message').textContent = message;
  if (actionText) sb.querySelector('.snackbar__action').textContent = actionText;

  sb.classList.add('snackbar--visible');

  const timer = setTimeout(() => {
    sb.classList.remove('snackbar--visible');
  }, duration);

  sb.querySelector('.snackbar__action').onclick = () => {
    clearTimeout(timer);
    sb.classList.remove('snackbar--visible');
  };
}

/* ================================================
   表格行交互（点击高亮）
   ================================================ */
function initTableRows() {
  document.querySelectorAll('.data-table tbody tr').forEach((row) => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      document.querySelectorAll('.data-table tbody tr').forEach((r) =>
        r.style.removeProperty('background')
      );
      row.style.background = 'rgba(98, 0, 238, 0.04)';
    });
  });
}

/* ================================================
   Nav 链接激活状态
   ================================================ */
function initNavLinks() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach((item) =>
        item.classList.remove('nav-item--active')
      );
      link.closest('.nav-item').classList.add('nav-item--active');
      link.setAttribute('aria-current', 'page');

      // 移动端自动关闭抽屉
      if (window.innerWidth < 905) {
        document.getElementById('navDrawer').classList.remove('nav-drawer--open');
        document.getElementById('scrim').classList.remove('scrim--visible');
      }
    });
  });
}

/* ================================================
   模拟实时数据更新（每 30 秒刷新一次）
   ================================================ */
function startRealtimeUpdate() {
  setInterval(() => {
    const valueEls = document.querySelectorAll('.metric-card__value[data-target]');
    valueEls.forEach((el) => {
      const current = parseFloat(el.dataset.target);
      const delta = (Math.random() - 0.3) * current * 0.015;
      const newTarget = Math.max(0, current + delta);
      el.dataset.target = newTarget.toFixed(1);
      el.dataset.animated = '';
      const suffix = el.dataset.suffix || '';
      animateCounter(el, newTarget, 800, suffix);
    });
  }, 30000);
}

/* ================================================
   初始化入口
   DOM 加载完成后运行
   ================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 导航交互
  initNavDrawer();
  initNavLinks();

  // KPI 数字动画
  initKpiCounters();

  // 图表绘制（等待字体加载）
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      drawLineChart('lineChart');
      drawPieChart('pieChart');
    });
  } else {
    setTimeout(() => {
      drawLineChart('lineChart');
      drawPieChart('pieChart');
    }, 300);
  }

  // UI 交互
  initTabGroups();
  initAlertDismiss();
  initRipples();
  initTableRows();

  // 实时更新
  startRealtimeUpdate();

  // 欢迎提示
  setTimeout(() => showSnackbar('数据已更新，共同步 8,642,153 条记录', '知道了', 5000), 2000);

  // 响应式图表重绘
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawLineChart('lineChart');
      drawPieChart('pieChart');
    }, 250);
  });
});
