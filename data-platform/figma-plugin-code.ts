/**
 * ============================================================
 * DataInsight 数据平台主页 — Figma 自动生成插件脚本
 * ============================================================
 * 基于 Material Design 2 规范
 *
 * 使用方法：
 *   1. 打开 Figma
 *   2. 菜单 → Plugins → Development → New Plugin
 *   3. 选择 "Figma design" → 确认
 *   4. 在 code.ts 中粘贴本文件全部内容
 *   5. 运行插件 → 自动生成完整设计稿
 * ============================================================
 */

// ==================== Design Tokens ====================

const COLORS = {
  primary500: { r: 0.384, g: 0, b: 0.933 },       // #6200EE
  primary700: { r: 0.216, g: 0, b: 0.702 },         // #3700B3
  primary50:  { r: 0.929, g: 0.906, b: 0.965 },     // #EDE7F6
  secondary400: { r: 0.012, g: 0.855, b: 0.776 },   // #03DAC6
  secondary700: { r: 0.006, g: 0.529, b: 0.525 },   // #018786
  background: { r: 0.961, g: 0.961, b: 0.961 },     // #F5F5F5
  surface:    { r: 1, g: 1, b: 1 },                  // #FFFFFF
  error:      { r: 0.690, g: 0, b: 0.125 },          // #B00020
  onPrimary:  { r: 1, g: 1, b: 1 },
  onSecondary:{ r: 0, g: 0, b: 0 },
  onBg:       { r: 0, g: 0, b: 0 },
  onSurfHigh: { r: 0, g: 0, b: 0 },                  // 87%
  onSurfMed:  { r: 0.4, g: 0.4, b: 0.4 },            // 60%
  onSurfDis:  { r: 0.62, g: 0.62, b: 0.62 },         // 38%
  successText:{ r: 0.180, g: 0.490, b: 0.196 },      // #2E7D32
  successBg:  { r: 0.910, g: 0.961, b: 0.914 },      // #E8F5E9
  warningText:{ r: 0.902, g: 0.318, b: 0 },           // #E65100
  warningBg:  { r: 1, g: 0.953, b: 0.878 },           // #FFF3E0
  infoText:   { r: 0.082, g: 0.396, b: 0.753 },       // #1565C0
  infoBg:     { r: 0.890, g: 0.949, b: 0.992 },       // #E3F2FD
  errorBg:    { r: 1, g: 0.922, b: 0.933 },           // #FFEBEE
  white:      { r: 1, g: 1, b: 1 },
  black:      { r: 0, g: 0, b: 0 },
  divider:    { r: 0.88, g: 0.88, b: 0.88 },          // rgba(0,0,0,0.08) approx
  chartOrange:{ r: 1, g: 0.427, b: 0 },               // #FF6D00
  chartBlue:  { r: 0.098, g: 0.463, b: 0.824 },       // #1976D2
  chartGreen: { r: 0.263, g: 0.627, b: 0.278 },       // #43A047
  cyan50:     { r: 0.878, g: 0.969, b: 0.980 },       // #E0F7FA
  purple100:  { r: 0.820, g: 0.769, b: 0.914 },       // #D1C4E9
  green100:   { r: 0.784, g: 0.902, b: 0.788 },       // #C8E6C9
  cyan100:    { r: 0.698, g: 0.922, b: 0.949 },       // #B2EBF2
  snackbar:   { r: 0.196, g: 0.196, b: 0.196 },       // #323232
};

// ==================== Helper Functions ====================

async function loadFont(family: string, style: string) {
  await figma.loadFontAsync({ family, style });
}

function createRect(
  parent: FrameNode | GroupNode,
  name: string,
  x: number, y: number, w: number, h: number,
  fill: RGB,
  cornerRadius = 0,
  opacity = 1
): RectangleNode {
  const r = figma.createRectangle();
  r.name = name;
  r.x = x;
  r.y = y;
  r.resize(w, h);
  r.fills = [{ type: 'SOLID', color: fill, opacity }];
  if (cornerRadius > 0) r.cornerRadius = cornerRadius;
  parent.appendChild(r);
  return r;
}

function createText(
  parent: FrameNode | GroupNode,
  name: string,
  x: number, y: number,
  content: string,
  fontSize: number,
  fill: RGB,
  fontStyle = 'Regular',
  opacity = 1,
  letterSpacing = 0
): TextNode {
  const t = figma.createText();
  t.name = name;
  t.x = x;
  t.y = y;
  t.fontName = { family: 'Roboto', style: fontStyle };
  t.fontSize = fontSize;
  t.characters = content;
  t.fills = [{ type: 'SOLID', color: fill, opacity }];
  if (letterSpacing) t.letterSpacing = { value: letterSpacing, unit: 'PIXELS' };
  parent.appendChild(t);
  return t;
}

function createFrame(
  parent: FrameNode | null,
  name: string,
  x: number, y: number, w: number, h: number,
  fill?: RGB,
  cornerRadius = 0
): FrameNode {
  const f = figma.createFrame();
  f.name = name;
  f.x = x;
  f.y = y;
  f.resize(w, h);
  if (fill) {
    f.fills = [{ type: 'SOLID', color: fill }];
  } else {
    f.fills = [];
  }
  if (cornerRadius > 0) f.cornerRadius = cornerRadius;
  f.clipsContent = true;
  if (parent) parent.appendChild(f);
  return f;
}

function addShadow(node: SceneNode & BlendMixin, level: number) {
  const shadows: Record<number, DropShadowEffect[]> = {
    1: [
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 1 }, radius: 3, spread: 0, visible: true, blendMode: 'NORMAL' },
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.24 }, offset: { x: 0, y: 1 }, radius: 2, spread: 0, visible: true, blendMode: 'NORMAL' },
    ],
    4: [
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.19 }, offset: { x: 0, y: 10 }, radius: 20, spread: 0, visible: true, blendMode: 'NORMAL' },
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.23 }, offset: { x: 0, y: 6 }, radius: 6, spread: 0, visible: true, blendMode: 'NORMAL' },
    ],
    6: [
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 14 }, radius: 28, spread: 0, visible: true, blendMode: 'NORMAL' },
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.22 }, offset: { x: 0, y: 10 }, radius: 10, spread: 0, visible: true, blendMode: 'NORMAL' },
    ],
    appbar: [
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.14 }, offset: { x: 0, y: 4 }, radius: 5, spread: 0, visible: true, blendMode: 'NORMAL' },
      { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 1 }, radius: 10, spread: 0, visible: true, blendMode: 'NORMAL' },
    ],
  };
  if (shadows[level]) {
    (node as any).effects = shadows[level];
  }
}

function createCircle(
  parent: FrameNode,
  name: string,
  x: number, y: number, size: number,
  fill: RGB,
  opacity = 1
): EllipseNode {
  const e = figma.createEllipse();
  e.name = name;
  e.x = x;
  e.y = y;
  e.resize(size, size);
  e.fills = [{ type: 'SOLID', color: fill, opacity }];
  parent.appendChild(e);
  return e;
}

function createLine(
  parent: FrameNode,
  name: string,
  x: number, y: number, w: number,
  color: RGB, opacity = 0.08
) {
  const r = figma.createRectangle();
  r.name = name;
  r.x = x;
  r.y = y;
  r.resize(w, 1);
  r.fills = [{ type: 'SOLID', color, opacity }];
  parent.appendChild(r);
  return r;
}

function createGradientRect(
  parent: FrameNode,
  name: string,
  x: number, y: number, w: number, h: number,
  colorStart: RGB, colorEnd: RGB,
  cornerRadius = 0
): RectangleNode {
  const r = figma.createRectangle();
  r.name = name;
  r.x = x;
  r.y = y;
  r.resize(w, h);
  r.fills = [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: [[0.7071, 0.7071, 0], [-0.7071, 0.7071, 0.5]],
    gradientStops: [
      { color: { ...colorStart, a: 1 }, position: 0 },
      { color: { ...colorEnd, a: 1 }, position: 1 },
    ],
  }];
  if (cornerRadius > 0) r.cornerRadius = cornerRadius;
  parent.appendChild(r);
  return r;
}

// ==================== Main Build Function ====================

async function buildDesign() {
  // Load fonts
  await loadFont('Roboto', 'Regular');
  await loadFont('Roboto', 'Medium');
  await loadFont('Roboto', 'Bold');
  await loadFont('Roboto', 'Light');

  // ===== Root Frame =====
  const page = figma.currentPage;
  const root = createFrame(null, '📄 DataInsight - Homepage', 0, 0, 1440, 1320, COLORS.background);
  page.appendChild(root);

  // ===========================
  // APP BAR
  // ===========================
  const appBar = createFrame(root, '🔲 App Bar', 0, 0, 1440, 64, COLORS.primary500);
  addShadow(appBar, 'appbar' as any);

  // Menu icon placeholder
  createCircle(appBar, '🔘 Menu Button', 12, 12, 40, COLORS.white, 0.12);
  createText(appBar, 'Menu Icon', 22, 20, '☰', 20, COLORS.onPrimary, 'Regular');

  // Logo
  createText(appBar, 'Logo Icon', 68, 16, '◆', 28, COLORS.secondary400, 'Bold');
  createText(appBar, 'Logo Title', 100, 20, 'DataInsight', 20, COLORS.onPrimary, 'Medium', 1, 0.15);

  // Search Bar
  const searchBar = createFrame(appBar, '🔷 Search Bar', 280, 12, 480, 40, COLORS.white, 4);
  searchBar.fills = [{ type: 'SOLID', color: COLORS.white, opacity: 0.15 }];
  createText(searchBar, 'Search Icon', 12, 10, '🔍', 16, COLORS.onPrimary, 'Regular', 0.7);
  createText(searchBar, 'Search Placeholder', 38, 11, '搜索数据集、报表、看板...', 14, COLORS.onPrimary, 'Regular', 0.6);

  // Notification
  createCircle(appBar, '🔘 Notification Button', 1260, 12, 40, COLORS.white, 0.05);
  createText(appBar, 'Bell Icon', 1272, 20, '🔔', 16, COLORS.onPrimary, 'Regular');
  const badge = createCircle(appBar, 'Badge', 1290, 14, 16, COLORS.secondary400);
  createText(appBar, 'Badge Text', 1294, 16, '3', 10, COLORS.onSecondary, 'Bold');

  // Settings
  createCircle(appBar, '🔘 Settings Button', 1312, 12, 40, COLORS.white, 0.05);
  createText(appBar, 'Settings Icon', 1324, 20, '⚙', 16, COLORS.onPrimary, 'Regular');

  // Avatar
  const avatar = createCircle(appBar, '⭕ Avatar', 1384, 12, 40, COLORS.secondary400);
  createText(appBar, 'Avatar Text', 1393, 22, 'ZY', 14, COLORS.onSecondary, 'Bold');

  // ===========================
  // NAVIGATION DRAWER
  // ===========================
  const navDrawer = createFrame(root, '🔲 Nav Drawer', 0, 64, 256, 1256, COLORS.surface);
  createLine(navDrawer, 'Right Border', 255, 0, 1, COLORS.black, 0.08);

  // Nav Header
  createText(navDrawer, 'Workspace Label', 16, 16, '工作空间', 10, COLORS.onSurfMed, 'Regular', 1, 1.5);
  createText(navDrawer, 'Workspace Name', 16, 32, '技术分析部', 14, COLORS.onBg, 'Medium');
  createLine(navDrawer, 'Header Divider', 0, 56, 256, COLORS.black, 0.08);

  // Nav items
  const navItems = [
    { icon: '📊', label: '总览看板', active: true },
    { icon: '📈', label: '数据分析', active: false },
    { icon: '💾', label: '数据集', active: false },
    { icon: '📋', label: '报表中心', active: false },
    { icon: '🔗', label: '数据建模', active: false },
  ];

  const navItems2 = [
    { icon: '🔄', label: '数据接入' },
    { icon: '🌿', label: '调度任务' },
    { icon: '✅', label: '数据质量' },
  ];

  const navItems3 = [
    { icon: '👤', label: '权限管理' },
    { icon: '❓', label: '帮助中心' },
  ];

  let navY = 68;
  navItems.forEach((item) => {
    const bg = item.active ? COLORS.primary50 : COLORS.surface;
    const textColor = item.active ? COLORS.primary500 : COLORS.onSurfMed;
    const fontStyle = item.active ? 'Medium' : 'Regular';

    const navItem = createFrame(navDrawer, `Nav Item / ${item.label}`, 0, navY, 248, 48, bg, 0);
    // Right-side rounded corners for active
    if (item.active) {
      navItem.topRightRadius = 24;
      navItem.bottomRightRadius = 24;
    }
    createText(navItem, 'Icon', 16, 12, item.icon, 20, textColor, 'Regular');
    createText(navItem, 'Label', 56, 14, item.label, 14, textColor, fontStyle);
    navY += 48;
  });

  // Divider
  navY += 4;
  createLine(navDrawer, 'Divider', 16, navY, 224, COLORS.black, 0.08);
  navY += 12;

  // Subheader
  createText(navDrawer, 'Subheader / 数据管理', 16, navY, '数据管理', 10, COLORS.onSurfDis, 'Medium', 1, 1.5);
  navY += 24;

  navItems2.forEach((item) => {
    createText(navDrawer, `Nav Icon / ${item.label}`, 16, navY + 12, item.icon, 20, COLORS.onSurfMed, 'Regular');
    createText(navDrawer, `Nav Label / ${item.label}`, 56, navY + 14, item.label, 14, COLORS.onSurfMed, 'Regular');
    navY += 48;
  });

  navY += 4;
  createLine(navDrawer, 'Divider 2', 16, navY, 224, COLORS.black, 0.08);
  navY += 12;
  createText(navDrawer, 'Subheader / 系统', 16, navY, '系统', 10, COLORS.onSurfDis, 'Medium', 1, 1.5);
  navY += 24;

  navItems3.forEach((item) => {
    createText(navDrawer, `Nav Icon / ${item.label}`, 16, navY + 12, item.icon, 20, COLORS.onSurfMed, 'Regular');
    createText(navDrawer, `Nav Label / ${item.label}`, 56, navY + 14, item.label, 14, COLORS.onSurfMed, 'Regular');
    navY += 48;
  });

  // ===========================
  // MAIN CONTENT AREA
  // ===========================
  const mainX = 280; // 256 drawer + 24 padding
  const mainW = 1136; // 1440 - 256 - 48 (left/right padding)
  let mainY = 88; // 64 appbar + 24 padding

  // ===========================
  // PAGE HEADER
  // ===========================
  createText(root, 'Page Title', mainX, mainY, '总览看板', 34, COLORS.onBg, 'Regular', 1, 0.25);
  mainY += 44;
  createText(root, 'Page Subtitle', mainX, mainY, '今日数据 · 实时更新', 14, COLORS.onSurfMed, 'Regular');

  // Status chip
  const statusChip = createFrame(root, 'Status Chip', mainX + 145, mainY - 2, 80, 22, COLORS.successBg, 12);
  createText(statusChip, 'Status Dot', 8, 3, '●', 10, COLORS.successText, 'Regular');
  createText(statusChip, 'Status Text', 24, 4, '运行正常', 12, COLORS.successText, 'Medium');

  // Action buttons
  // Outlined button
  const btnOutlined = createFrame(root, 'Button / Outlined / 导出报告', mainX + mainW - 240, mainY - 16, 112, 36, COLORS.surface, 4);
  btnOutlined.strokes = [{ type: 'SOLID', color: COLORS.primary500, opacity: 0.5 }];
  btnOutlined.strokeWeight = 1;
  createText(btnOutlined, 'Btn Text', 16, 10, '导出报告', 14, COLORS.primary500, 'Medium', 1, 1.25);

  // Contained button
  const btnContained = createFrame(root, 'Button / Contained / 新建看板', mainX + mainW - 116, mainY - 16, 112, 36, COLORS.primary500, 4);
  addShadow(btnContained, 1);
  createText(btnContained, 'Btn Text', 16, 10, '新建看板', 14, COLORS.onPrimary, 'Medium', 1, 1.25);

  mainY += 40;

  // ===========================
  // SECTION TITLE - 核心指标
  // ===========================
  createText(root, 'Section Title / 核心指标', mainX, mainY, '核心指标', 20, COLORS.onBg, 'Medium', 1, 0.15);
  mainY += 36;

  // ===========================
  // KPI METRIC CARDS (4 cards)
  // ===========================
  const kpiData = [
    { icon: '💾', iconBg: COLORS.primary50, iconColor: COLORS.primary500, value: '8,642,153', unit: '条记录', label: '今日数据量', trend: '+12.4%', trendUp: true, compare: '较昨日' },
    { icon: '📊', iconBg: COLORS.cyan50, iconColor: COLORS.secondary700, value: '1,284', unit: '个', label: '活跃数据集', trend: '+3.2%', trendUp: true, compare: '较上周' },
    { icon: '✅', iconBg: COLORS.successBg, iconColor: COLORS.successText, value: '98.6%', unit: '', label: '任务成功率', trend: '-0.3%', trendUp: false, compare: '较昨日' },
    { icon: '🔌', iconBg: COLORS.warningBg, iconColor: COLORS.warningText, value: '342.8万', unit: '', label: 'API 调用次数', trend: '+21.7%', trendUp: true, compare: '较上月' },
  ];

  const cardW = (mainW - 48) / 4; // 4 cards with 16px gaps

  kpiData.forEach((data, i) => {
    const cx = mainX + i * (cardW + 16);
    const card = createFrame(root, `🃏 Metric Card / ${data.label}`, cx, mainY, cardW, 180, COLORS.surface, 8);
    addShadow(card, 1);

    // Icon container
    const iconBg = createRect(card, 'Icon Bg', 20, 20, 48, 48, data.iconBg, 8);
    createText(card, 'Icon', 32, 30, data.icon, 24, data.iconColor, 'Regular');

    // More button
    createText(card, 'More', cardW - 36, 24, '⋮', 18, COLORS.onSurfMed, 'Regular');

    // Value
    createText(card, 'Value', 20, 80, data.value, 32, COLORS.onBg, 'Regular', 1, -0.5);

    // Unit
    if (data.unit) {
      createText(card, 'Unit', 20, 116, data.unit, 14, COLORS.onSurfMed, 'Regular');
    }

    // Label
    createText(card, 'Label', 20, 118 + (data.unit ? 18 : 0), data.label, 14, COLORS.onSurfMed, 'Regular');

    // Footer divider
    createLine(card, 'Footer Line', 20, 150, cardW - 40, COLORS.black, 0.06);

    // Trend
    const trendColor = data.trendUp ? COLORS.successText : COLORS.error;
    const trendIcon = data.trendUp ? '↑' : '↓';
    createText(card, 'Trend', 20, 158, `${trendIcon} ${data.trend}`, 12, trendColor, 'Medium');
    createText(card, 'Compare', 100, 158, data.compare, 12, COLORS.onSurfDis, 'Regular');
  });

  mainY += 200;

  // ===========================
  // SECTION TITLE - 数据趋势
  // ===========================
  createText(root, 'Section Title / 数据趋势', mainX, mainY, '数据趋势', 20, COLORS.onBg, 'Medium', 1, 0.15);
  mainY += 36;

  // ===========================
  // LINE CHART CARD
  // ===========================
  const lineChartW = mainW - 336; // Wide card
  const lineChart = createFrame(root, '🃏 Line Chart Card', mainX, mainY, lineChartW, 300, COLORS.surface, 8);
  addShadow(lineChart, 1);

  createText(lineChart, 'Title', 20, 16, '数据写入量趋势', 16, COLORS.onBg, 'Medium');
  createText(lineChart, 'Subtitle', 20, 38, '过去 30 天 · 按天统计', 12, COLORS.onSurfMed, 'Regular');

  // Tab group
  const tabGroup = createFrame(lineChart, 'Tab Group', lineChartW - 180, 14, 160, 32, COLORS.background, 4);
  const tabs = ['7天', '30天', '90天'];
  tabs.forEach((tab, i) => {
    const tabW = 48;
    const tabX = 4 + i * 52;
    const isActive = i === 0;
    if (isActive) {
      const activeTab = createRect(tabGroup, `Tab Active`, tabX, 4, tabW, 24, COLORS.surface, 2);
      addShadow(activeTab, 1);
    }
    createText(tabGroup, `Tab / ${tab}`, tabX + 8, 8, tab, 12, isActive ? COLORS.primary500 : COLORS.onSurfMed, 'Medium');
  });

  // Chart area placeholder
  const chartArea = createFrame(lineChart, 'Chart Area', 20, 68, lineChartW - 40, 212, COLORS.background, 4);
  chartArea.fills = [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: [[1, 0, 0], [0, 1, 0]],
    gradientStops: [
      { color: { r: 0.384, g: 0, b: 0.933, a: 0.08 }, position: 0 },
      { color: { r: 0.384, g: 0, b: 0.933, a: 0 }, position: 1 },
    ],
  }];

  // Grid lines
  for (let i = 0; i < 5; i++) {
    const gy = 20 + i * 38;
    createLine(chartArea, `Grid ${i}`, 40, gy, lineChartW - 100, COLORS.black, 0.05);
    createText(chartArea, `Y Label ${i}`, 4, gy - 6, `${90 - i * 20}M`, 10, COLORS.onSurfDis, 'Regular');
  }

  // X-axis labels
  const xLabels = ['3/13', '3/14', '3/15', '3/16', '3/17', '3/18', '3/19'];
  const chartInnerW = lineChartW - 140;
  xLabels.forEach((label, i) => {
    const lx = 40 + i * (chartInnerW / 6);
    createText(chartArea, `X Label ${i}`, lx, 192, label, 10, COLORS.onSurfDis, 'Regular');
  });

  // Simulated line (Primary)
  const lineDataPoints = [
    { x: 50, y: 130 }, { x: 150, y: 98 }, { x: 250, y: 110 },
    { x: 350, y: 62 }, { x: 450, y: 78 }, { x: 550, y: 42 }, { x: 650, y: 24 },
  ];

  lineDataPoints.forEach((pt, i) => {
    if (i < lineDataPoints.length && pt.x < chartInnerW + 80) {
      const dot = createCircle(chartArea, `Data Point ${i}`, pt.x - 4, pt.y - 4, 8, COLORS.primary500);
      // White fill inner
      createCircle(chartArea, `Dot Inner ${i}`, pt.x - 3, pt.y - 3, 6, COLORS.white);
      createCircle(chartArea, `Dot Core ${i}`, pt.x - 2.5, pt.y - 2.5, 5, COLORS.primary500);
    }
  });

  // Chart placeholder text
  createText(chartArea, 'Chart Hint', chartInnerW / 2 - 40, 90, '折线图区域', 14, COLORS.onSurfDis, 'Regular');

  // ===========================
  // PIE CHART CARD
  // ===========================
  const pieChart = createFrame(root, '🃏 Pie Chart Card', mainX + lineChartW + 16, mainY, 320, 300, COLORS.surface, 8);
  addShadow(pieChart, 1);

  createText(pieChart, 'Title', 20, 16, '数据源分布', 16, COLORS.onBg, 'Medium');
  createText(pieChart, 'Subtitle', 20, 38, '按来源类型', 12, COLORS.onSurfMed, 'Regular');

  // Donut chart placeholder
  const donutSize = 140;
  const donutX = (320 - donutSize) / 2;
  const donutY = 64;

  // Outer ring segments (simplified as colored arcs represented by circles)
  const outerRing = createCircle(pieChart, 'Donut Outer', donutX, donutY, donutSize, COLORS.primary500);
  // Inner white circle to create donut
  createCircle(pieChart, 'Donut Inner', donutX + 30, donutY + 30, donutSize - 60, COLORS.surface);

  // Center text
  createText(pieChart, 'Center Label', donutX + 42, donutY + 52, '数据源', 12, COLORS.onSurfMed, 'Regular');
  createText(pieChart, 'Center Value', donutX + 48, donutY + 68, '5 类', 18, COLORS.onBg, 'Bold');

  // Legend
  const legendData = [
    { label: 'MySQL  38%', color: COLORS.primary500 },
    { label: 'Kafka  25%', color: COLORS.secondary400 },
    { label: 'HDFS   18%', color: COLORS.chartOrange },
    { label: 'API    12%', color: COLORS.chartBlue },
    { label: '其他    7%', color: COLORS.chartGreen },
  ];

  legendData.forEach((item, i) => {
    const lx = 40 + (i % 3) * 88;
    const ly = 218 + Math.floor(i / 3) * 24;
    createCircle(pieChart, `Legend Dot ${i}`, lx, ly, 10, item.color);
    createText(pieChart, `Legend Label ${i}`, lx + 14, ly - 2, item.label, 11, COLORS.onSurfMed, 'Regular');
  });

  mainY += 320;

  // ===========================
  // DUAL COLUMN: TASKS + ALERTS
  // ===========================
  const colW = (mainW - 16) / 2;

  // --- TASK TABLE ---
  createText(root, 'Section Title / 调度任务状态', mainX, mainY, '调度任务状态', 20, COLORS.onBg, 'Medium', 1, 0.15);
  createText(root, 'Link / 查看全部', mainX + colW - 80, mainY + 4, '查看全部 →', 14, COLORS.primary500, 'Medium');

  // Alert section title
  createText(root, 'Section Title / 告警通知', mainX + colW + 16, mainY, '告警通知', 20, COLORS.onBg, 'Medium', 1, 0.15);
  createText(root, 'Link / 全部已读', mainX + mainW - 120, mainY + 4, '全部标记已读 ✓', 14, COLORS.primary500, 'Medium');

  mainY += 36;

  const tableCard = createFrame(root, '🃏 Task Table Card', mainX, mainY, colW, 290, COLORS.surface, 8);
  addShadow(tableCard, 1);

  // Table header
  const thY = 0;
  const colWidths = [220, 60, 100, 80];
  const thLabels = ['任务名称', '类型', '更新时间', '状态'];
  let thX = 16;
  thLabels.forEach((label, i) => {
    createText(tableCard, `TH / ${label}`, thX, 14, label, 12, COLORS.onSurfMed, 'Medium', 1, 0.4);
    thX += colWidths[i];
  });
  createLine(tableCard, 'TH Bottom', 0, 44, colW, COLORS.black, 0.08);

  // Table rows
  const taskRows = [
    { name: '🔄 用户行为数据同步', type: 'ETL', time: '08:32', status: '成功', statusColor: COLORS.successText, statusBg: COLORS.successBg },
    { name: '🌿 订单聚合分析', type: 'SQL', time: '08:15', status: '成功', statusColor: COLORS.successText, statusBg: COLORS.successBg },
    { name: '🤖 推荐模型训练', type: 'ML', time: '07:50', status: '运行中', statusColor: COLORS.infoText, statusBg: COLORS.infoBg },
    { name: '💾 日志数据清洗', type: 'ETL', time: '07:00', status: '失败', statusColor: COLORS.error, statusBg: COLORS.errorBg },
    { name: '📈 实时指标计算', type: '流式', time: '实时', status: '成功', statusColor: COLORS.successText, statusBg: COLORS.successBg },
  ];

  taskRows.forEach((row, i) => {
    const ry = 52 + i * 48;
    let rx = 16;
    createText(tableCard, `Task Name ${i}`, rx, ry + 14, row.name, 14, COLORS.onBg, 'Regular');
    rx += colWidths[0];
    createText(tableCard, `Task Type ${i}`, rx, ry + 16, row.type, 10, COLORS.onSurfMed, 'Regular', 1, 1.5);
    rx += colWidths[1];
    createText(tableCard, `Task Time ${i}`, rx, ry + 16, row.time, 12, COLORS.onSurfMed, 'Regular');
    rx += colWidths[2];

    // Status badge
    const badgeW = row.status.length * 12 + 16;
    const statusBadge = createRect(tableCard, `Status Badge ${i}`, rx, ry + 12, badgeW, 22, row.statusBg, 12);
    createText(tableCard, `Status Text ${i}`, rx + 8, ry + 15, row.status, 12, row.statusColor, 'Medium');

    if (i < taskRows.length - 1) {
      createLine(tableCard, `Row Line ${i}`, 0, ry + 47, colW, COLORS.black, 0.04);
    }
  });

  // --- ALERT LIST ---
  const alertCard = createFrame(root, '🃏 Alert List', mainX + colW + 16, mainY, colW, 290, COLORS.background, 0);
  alertCard.fills = [];

  const alerts = [
    { icon: '❌', title: '日志清洗任务失败', desc: '源表 ods_log_detail 连接超时，已重试 3 次', time: '今天 07:02', borderColor: COLORS.error, bgColor: { r: 1, g: 0.98, b: 0.98 }, iconColor: COLORS.error },
    { icon: '⚠️', title: '数据质量异常', desc: 'dws_user_behavior 表空值率达 15.3%，超过阈值', time: '今天 06:45', borderColor: COLORS.chartOrange, bgColor: { r: 1, g: 0.99, b: 0.97 }, iconColor: COLORS.warningText },
    { icon: 'ℹ️', title: '存储空间提醒', desc: 'HDFS 集群存储使用率已达 78%，建议清理', time: '昨天 23:10', borderColor: COLORS.chartBlue, bgColor: { r: 0.97, g: 0.98, b: 1 }, iconColor: COLORS.infoText },
    { icon: '✅', title: '数据接入完成', desc: '新增数据源「商品评论库」接入成功，共 412 万条', time: '昨天 22:30', borderColor: COLORS.chartGreen, bgColor: { r: 0.97, g: 1, b: 0.97 }, iconColor: COLORS.successText },
  ];

  alerts.forEach((alert, i) => {
    const ay = i * 70;
    const alertItem = createFrame(alertCard, `Alert / ${alert.title}`, 0, ay, colW, 62, alert.bgColor as RGB, 8);
    addShadow(alertItem, 1);

    // Left border
    const leftBorder = createRect(alertItem, 'Left Border', 0, 0, 4, 62, alert.borderColor);
    leftBorder.topLeftRadius = 8;
    leftBorder.bottomLeftRadius = 8;

    createText(alertItem, 'Alert Icon', 16, 12, alert.icon, 18, alert.iconColor, 'Regular');
    createText(alertItem, 'Alert Title', 44, 10, alert.title, 14, COLORS.onBg, 'Medium');
    createText(alertItem, 'Alert Desc', 44, 28, alert.desc, 12, COLORS.onSurfMed, 'Regular');
    createText(alertItem, 'Alert Time', 44, 46, alert.time, 10, COLORS.onSurfDis, 'Regular', 1, 0.4);
    createText(alertItem, 'Close Btn', colW - 32, 12, '✕', 16, COLORS.onSurfMed, 'Regular');
  });

  mainY += 310;

  // ===========================
  // RECENTLY USED
  // ===========================
  createText(root, 'Section Title / 最近使用', mainX, mainY, '最近使用', 20, COLORS.onBg, 'Medium', 1, 0.15);
  createText(root, 'Link / 浏览全部', mainX + mainW - 100, mainY + 4, '浏览全部 →', 14, COLORS.primary500, 'Medium');
  mainY += 36;

  const recentData = [
    { name: '用户增长分析', type: '报表', icon: '📈', gradStart: COLORS.primary50, gradEnd: COLORS.purple100, iconColor: COLORS.primary500, time: '3小时前' },
    { name: 'GMV 核心指标', type: '看板', icon: '📊', gradStart: COLORS.cyan50, gradEnd: COLORS.cyan100, iconColor: COLORS.secondary700, time: '昨天' },
    { name: '商品点击行为', type: '数据集', icon: '💾', gradStart: COLORS.successBg, gradEnd: COLORS.green100, iconColor: COLORS.successText, time: '2天前' },
    { name: '供应链可视化', type: '看板', icon: '🌿', gradStart: COLORS.cyan50, gradEnd: COLORS.cyan100, iconColor: COLORS.secondary700, time: '3天前' },
    { name: '广告投放效果', type: '报表', icon: '📊', gradStart: COLORS.primary50, gradEnd: COLORS.purple100, iconColor: COLORS.primary500, time: '4天前' },
  ];

  const recentCardW = (mainW - 64) / 5;

  recentData.forEach((item, i) => {
    const rx = mainX + i * (recentCardW + 16);
    const card = createFrame(root, `🃏 Recent Card / ${item.name}`, rx, mainY, recentCardW, 168, COLORS.surface, 8);
    addShadow(card, 1);
    card.clipsContent = true;

    // Thumbnail gradient
    createGradientRect(card, 'Thumbnail', 0, 0, recentCardW, 96, item.gradStart, item.gradEnd);
    createText(card, 'Thumb Icon', recentCardW / 2 - 16, 30, item.icon, 36, item.iconColor, 'Regular', 0.7);

    // Info
    createText(card, 'Name', 12, 106, item.name, 14, COLORS.onBg, 'Medium');

    // Chip
    const chip = createFrame(card, `Chip / ${item.type}`, 12, 130, item.type.length * 10 + 16, 20, COLORS.background, 12);
    chip.strokes = [{ type: 'SOLID', color: COLORS.black, opacity: 0.12 }];
    chip.strokeWeight = 1;
    createText(chip, 'Chip Text', 6, 3, item.type, 10, COLORS.onSurfMed, 'Medium', 1, 0.6);

    createText(card, 'Time', recentCardW - 50, 134, item.time, 11, COLORS.onSurfMed, 'Regular');
  });

  mainY += 188;

  // ===========================
  // FAB
  // ===========================
  const fab = createCircle(root, '⭕ FAB', 1360, mainY - 80, 56, COLORS.secondary400);
  addShadow(fab, 6);
  createText(root, 'FAB Icon', 1376, mainY - 64, '+', 28, COLORS.onSecondary, 'Light');

  // ===========================
  // SNACKBAR
  // ===========================
  const snackbar = createFrame(root, '🔲 Snackbar', 520, mainY - 20, 400, 48, COLORS.snackbar, 4);
  addShadow(snackbar, 6);
  createText(snackbar, 'Snackbar Message', 16, 14, '数据已更新，共同步 8,642,153 条记录', 14, COLORS.white, 'Regular');
  createText(snackbar, 'Snackbar Action', 340, 14, '知道了', 14, COLORS.secondary400, 'Medium', 1, 1.25);

  // ===========================
  // Adjust root height
  // ===========================
  root.resize(1440, mainY + 40);

  // Zoom to fit
  figma.viewport.scrollAndZoomIntoView([root]);

  figma.notify('✅ DataInsight 数据平台主页设计稿已生成！', { timeout: 4000 });
  figma.closePlugin();
}

// ===== Execute =====
buildDesign();
