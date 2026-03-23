# Material Design States 交互状态规范

> 来源：Material Design Baseline Design Kit（Figma Ver.1.00）  
> 数据来自 figma-242-26193（状态规范图层）与 figma-0-3319（规范总览图）

---

## 一、交互状态总览

Material Design 定义了 **7 种组件交互状态**，每种状态通过在基础颜色上叠加一层半透明 **State Layer（Overlay）** 来视觉传达。

| 状态名称 | Overlay 颜色 | 叠加透明度 | 说明 |
| -------- | ------------ | ---------- | ---- |
| **Enabled**（默认）| — | 0% | 无叠加，组件正常可交互状态 |
| **Hover**（悬停）| 内容色 | 4% | 鼠标悬停时轻微反馈 |
| **Focus**（聚焦）| 内容色 | 12% | 键盘或屏幕阅读器聚焦时，添加轮廓 |
| **Pressed**（按压）| 内容色 | 12% | 点击/触摸时波纹效果（Ripple）|
| **Dragged**（拖拽）| 内容色 | 8% | 拖拽中，额外提升 Elevation |
| **Selected**（选中）| 内容色 | 8% | 切换/单选/多选的选中态 |
| **Disabled**（禁用）| — | opacity 38% | 整体透明度降至 38%，无交互 |

> **Overlay 颜色规则**：State Layer 颜色继承自组件内容色（Content Color），如 Primary 按钮的 Hover 层使用 `#FFFFFF`（On Primary）作为叠加色。

---

## 二、各状态详细规范

### 2.1 Enabled（默认态）

```
内容色：Content (e.g., Primary)
Overlay：无（0%）
Elevation：组件默认 Elevation
容器背景：Container (e.g., Surface)
```

**实现示例（CSS）：**
```css
.md-button {
  background-color: var(--color-primary);   /* #6200EE */
  color: var(--color-on-primary);           /* #FFFFFF */
  /* 无 overlay */
}
```

---

### 2.2 Hover（悬停态）

```
Overlay 颜色：继承内容色（On Primary = #FFFFFF）
Overlay 透明度：4%（alpha = 0.04）
Elevation：保持默认（不提升）
触发方式：鼠标指针进入组件区域
```

**实现示例（CSS）：**
```css
.md-button:hover {
  /* 在原背景上叠加 4% 白色 */
  background-color: color-mix(
    in srgb,
    var(--color-primary) 100%,
    #FFFFFF 4%
  );
  /* 或使用 pseudo-element */
}

/* 推荐方式：使用 ::after 伪元素 */
.md-button::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--color-on-primary);
  opacity: 0;
  transition: opacity 0.15s;
}
.md-button:hover::after {
  opacity: 0.04; /* 4% */
}
```

---

### 2.3 Focus（聚焦态）

```
Overlay 颜色：继承内容色
Overlay 透明度：12%（alpha = 0.12）
Stroke（轮廓）：Overlay 颜色，100% 不透明度
触发方式：键盘 Tab 聚焦、屏幕阅读器
```

**实现示例（CSS）：**
```css
.md-button:focus-visible {
  outline: none;
}
.md-button:focus-visible::after {
  opacity: 0.12; /* 12% */
}
.md-button:focus-visible {
  /* Focus ring：Overlay 颜色 100% */
  box-shadow: 0 0 0 3px var(--color-on-primary);
}
```

---

### 2.4 Pressed（按压态 / Ripple）

```
Overlay 颜色：继承内容色
Overlay 透明度：12%（alpha = 0.12，波纹峰值）
Ripple（波纹）：从点击中心扩散，颜色为内容色，透明度 10% → 淡出
Elevation：不变
```

**Ripple 波纹实现参考：**
```css
/* 按压整体叠加 12% */
.md-button:active::after {
  opacity: 0.12;
}

/* Ripple 效果（JavaScript + keyframes） */
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.10;
  }
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
.ripple-element {
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-on-primary);
  animation: ripple 0.6s linear;
  pointer-events: none;
}
```

---

### 2.5 Dragged（拖拽态）

```
Overlay 颜色：继承内容色
Overlay 透明度：8%（alpha = 0.08）
Elevation：额外提升至 08dp（添加阴影）
触发方式：鼠标/触摸拖拽进行中
```

**实现示例（CSS）：**
```css
.md-list-item--dragging {
  box-shadow:
    0 5px 5px rgba(0, 0, 0, 0.20),
    0 3px 14px rgba(0, 0, 0, 0.12),
    0 8px 10px rgba(0, 0, 0, 0.14);  /* 08dp elevation */
}
.md-list-item--dragging::after {
  opacity: 0.08; /* 8% */
}
```

---

### 2.6 Selected（选中态）

```
Overlay 颜色：继承内容色（Primary 500 = #6200EE）
Overlay 透明度：8%（alpha = 0.08）
图标：显示选中图标（checkmark / filled icon）
颜色：内容变为 Primary 色
```

**实现示例（CSS）：**
```css
.md-chip--selected {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
.md-chip--selected::after {
  opacity: 0.08; /* 8% overlay */
}

/* List Item selected */
.md-list-item--selected {
  background-color: rgba(98, 0, 238, 0.08); /* Primary 8% */
  color: var(--color-primary);
}
```

---

### 2.7 Disabled（禁用态）

```
整体透明度：38%（opacity: 0.38）
无 Overlay
无阴影（Elevation 降为 0）
无交互（pointer-events: none）
颜色：保持原色但通过 opacity 弱化
```

**实现示例（CSS）：**
```css
.md-button:disabled,
.md-button[aria-disabled="true"] {
  opacity: 0.38;
  pointer-events: none;
  cursor: default;
  box-shadow: none;
  /* 不改变 background-color，通过 opacity 体现禁用 */
}
```

---

## 三、Surface Container 状态层级关系

根据 Figma 数据（figma-242-26193），组件状态存在三层叠加关系：

```
层级 1：Content（内容层）
  ↓ 继承颜色作为 Overlay 颜色
层级 2：Overlay（状态叠加层）
  ↓ 透明度由状态决定（0% / 4% / 8% / 12%）
层级 3：Container（容器背景层）
  - 通常为 Surface (#FFFFFF) 或 Primary (#6200EE)
```

**示例：Primary Contained Button 的 Hover 状态**

```
Container：Primary (#6200EE) ← 按钮底色
Overlay：On Primary (#FFFFFF) at 4% ← 悬停叠加
Content：On Primary (#FFFFFF) ← 按钮文字/图标
```

---

## 四、CSS 状态系统完整实现

```css
/* =============================================
   Material Design State Layer System
   ============================================= */

/* 所有可交互组件基础设置 */
.md-interactive {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* State Layer：使用 ::before 伪元素 */
.md-interactive::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: currentColor;  /* 继承当前文字色 */
  opacity: 0;
  pointer-events: none;
  transition: opacity 100ms linear;
}

/* Hover: 4% */
.md-interactive:hover::before {
  opacity: 0.04;
}

/* Focus: 12% */
.md-interactive:focus-visible::before {
  opacity: 0.12;
}

/* Pressed: 12% */
.md-interactive:active::before {
  opacity: 0.12;
}

/* Selected: 8% */
.md-interactive[aria-selected="true"]::before,
.md-interactive.is-selected::before {
  opacity: 0.08;
}

/* Disabled: 38% opacity 整体 */
.md-interactive:disabled,
.md-interactive[aria-disabled="true"] {
  opacity: 0.38;
  pointer-events: none;
}

/* Dragged: 8% + Elevation */
.md-interactive.is-dragging::before {
  opacity: 0.08;
}
.md-interactive.is-dragging {
  box-shadow:
    0px 8px 10px rgba(0,0,0,0.14),
    0px 3px 14px rgba(0,0,0,0.12),
    0px 5px 5px rgba(0,0,0,0.20);  /* 08dp */
}
```

---

## 五、状态 Overlay 速查表

```
状态名      | Overlay Alpha | 特殊属性
----------- | ------------- | ------------------
Enabled     |     0%        | —
Hover       |     4%        | —
Focus       |    12%        | + Stroke（Outline）
Pressed     |    12%        | + Ripple 动画
Dragged     |     8%        | + Elevation 08dp
Selected    |     8%        | + 选中图标
Disabled    |    38%        | opacity 整体，无交互
```

---

## 六、Figma 数据溯源

以下数据直接来自 `figma-242-26193-oINEzJJHVk26tPc31kdRIW.json`：

| 状态 | Figma 文本内容 | 节点 ID |
| ---- | -------------- | ------- |
| Hover | "Overlay: 4%" | 242:26244 |
| Focus | "Overlay: 12%\nStroke: Overlay color 100%" | 242:26237 |
| Pressed | "Ripple: Overlay color 10%" | 242:26230 |
| Dragged | "Overlay: 8%\nElevation: 08dp" | 242:26220 |
| Selected | "Overlay: 8%" | 242:26213 |
| Disabled | opacity: "0.38" | 242:26312 |
| Enabled | "Content: Primary" | 242:26289 |
| Hover (State layer) | "State layer: 4%" | 242:26291 |
