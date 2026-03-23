# Material Design Baseline Components — Figma 设计规范

> 本文档基于 Figma 设计稿（Material Design Baseline Components Ver.1.1）提取的完整组件设计规范，包含精确颜色值、尺寸、排版和交互状态。

---

## 目录

1. [设计 Token](#一设计-token)
2. [颜色规范](#二颜色规范)
3. [排版规范](#三排版规范)
4. [间距规范](#四间距规范)
5. [图标系统](#五图标系统)
6. [组件规范详解](#六组件规范详解)
   - [App Bar 顶部导航栏](#61-app-bar-顶部导航栏)
   - [Bottom Navigation 底部导航栏](#62-bottom-navigation-底部导航栏)
   - [Tab Bar 标签栏](#63-tab-bar-标签栏)
   - [Card 卡片](#64-card-卡片)
   - [List 列表](#65-list-列表)
   - [Text Field 输入框](#66-text-field-输入框)
   - [Button 按钮](#67-button-按钮)
   - [Chip 标签](#68-chip-标签)
   - [Slider 滑块](#69-slider-滑块)
   - [Snackbar 提示条](#610-snackbar-提示条)
   - [Data Card 数据卡片](#611-data-card-数据卡片)
   - [Radio Button 单选框](#612-radio-button-单选框)

---

## 一、设计 Token

所有组件均使用以下设计 Token，建议以 CSS 变量形式定义：

```css
:root {
  /* 颜色 */
  --color-primary:             #6200EA;  /* 主色（深紫）*/
  --color-primary-variant:     #7C4DFF;  /* 主色变体（亮紫）*/
  --color-secondary:           #1DE9B6;  /* 辅助色（青绿 Teal Accent）*/
  --color-surface:             #FFFFFF;  /* 表面色 */
  --color-background:          #F5F5F5;  /* 背景色 */
  --color-on-primary:          #FFFFFF;  /* 主色上前景色 */
  --color-on-surface:          #212121;  /* 表面上主文字 */
  --color-on-surface-medium:   #424242;  /* 表面上次要文字 */
  --color-on-surface-hint:     #757575;  /* 表面上提示文字 */
  --color-on-surface-disabled: #9E9E9E;  /* 禁用状态颜色 */
  --color-divider:             #E0E0E0;  /* 分割线 */
  --color-image-placeholder:   #BDBDBD;  /* 图片占位符 */
  --color-input-bg:            #EEEEEE;  /* 输入框背景 */
  --color-snackbar-bg:         #212121;  /* Snackbar 背景 */
  --color-selected-overlay:    rgba(124, 77, 255, 0.12); /* 选中态叠加层 */

  /* 圆角 */
  --border-radius-card:  4px;
  --border-radius-chip:  16px;   /* Pill 形 */
  --border-radius-btn:   4px;

  /* 阴影（对应 Material 海拔层级）*/
  --elevation-1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --elevation-2: 0 2px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.16);
  --elevation-6: 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);

  /* 间距（基于 8dp 网格）*/
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;

  /* 字体 */
  --font-family-base:      'Roboto', sans-serif;
  --font-family-mono:      'Roboto Mono', monospace;
}
```

---

## 二、颜色规范

### 2.1 主色调色板

| 角色 | 颜色值 | 用途 |
| ---- | ------ | ---- |
| Primary | `#6200EA` | App Bar、Bottom Nav 背景 |
| Primary Variant | `#7C4DFF` | 按钮、活跃边框、链接、图标活跃态 |
| Secondary | `#1DE9B6` | FAB 浮动操作按钮、步骤进度指示器 |

### 2.2 文字颜色层级

| 层级 | 颜色值 | 适用场景 |
| ---- | ------ | -------- |
| High Emphasis | `#212121` | 主标题、卡片数字、正文 |
| Medium Emphasis | `#424242` | 副标题、列表主文字 |
| Low / Hint | `#757575` | 辅助文字、Label、Caption |
| Disabled | `#9E9E9E` | 禁用状态文字、编号 |
| On Primary | `#FFFFFF` | 主色背景上的所有元素 |
| Active / Link | `#7C4DFF` | 按钮文字、选中态文字、链接 |

### 2.3 背景色

| 用途 | 颜色值 |
| ---- | ------ |
| 页面背景 | `#F5F5F5` 或 `#FAFAFA` |
| 白色卡片 / 对话框 | `#FFFFFF` |
| App Bar / Bottom Nav | `#6200EA` |
| 输入框填充背景 | `#EEEEEE` |
| Snackbar 背景 | `#212121` |
| 图片占位符 | `#BDBDBD` |

---

## 三、排版规范

使用 **Roboto** 字体族（Material Design 默认字体）。

| 样式名称 | 字号 | 字重 | 颜色（默认）| 典型用途 |
| -------- | ---- | ---- | ----------- | -------- |
| Page Headline（特殊）| 32-36px | 400（Monospace）| `#212121` | 设计稿主标题 |
| Headline 6 | 20px | 500 | `#212121` | 卡片标题、模块标题 |
| Subtitle 1 | 16px | 400 | `#424242` | 列表主文字 |
| Subtitle 2 | 14px | 500 | `#424242` | 列表副文字 |
| Body 1 | 16px | 400 | `#212121` | 正文内容 |
| Body 2 | 14px | 400 | `#757575` | 辅助说明文字 |
| Button | 14px | 700（全大写）| 见按钮规范 | 按钮文字 |
| Caption | 12px | 400 | `#757575` | 图片说明、辅助文字 |
| Overline | 12px | 400（全大写）| `#757575` | 分类标签 |
| Data Value | 28-32px | 500 | `#212121` | 数据卡片数字 |

---

## 四、间距规范

基于 **8dp 基准网格**：

| 位置 | 数值 | 说明 |
| ---- | ---- | ---- |
| App Bar / Bottom Nav 内边距 | `16px` 左右 | 水平内边距 |
| 卡片内容区 padding | `16px` | 四周均匀 |
| 列表项左 padding | `16px`（无头像）/ `72px`（有头像）| 含头像时为 16+40+16 |
| 列表项右 padding | `16px` | |
| 模块间距（列间距）| `24px` | 卡片列之间 |
| 列表行间距 | `8px` | |
| 按钮 padding | `8px 16px` | 上下 8px，左右 16px |
| Chip padding | `0 12px` | |
| Snackbar padding | `14px 16px` | |
| FAB 叠加偏移 | `bottom: -28px` | 叠加在 App Bar 底部 |

### 标准组件高度

| 组件 | 高度 |
| ---- | ---- |
| App Bar | `56px` |
| Bottom Navigation | `56px` |
| Tab Bar | `48px` |
| 输入框（Text Field）| `56px` |
| 按钮（Button）| `36px` |
| Chip | `32px` |
| 列表单行项 | `48px` |
| 列表双行项 | `72px` |
| 列表三行项 | `88px` |
| FAB（浮动按钮）| `56px`（直径） |

---

## 五、图标系统

- **图标库**：Material Icons（支持 Filled 实心 + Outlined 空心两种风格）
- **标准尺寸**：`24px × 24px`

### 图标颜色规则

| 场景 | 图标颜色 |
| ---- | -------- |
| 活跃态图标（列表选中、输入框激活）| `#7C4DFF` |
| 普通图标（非激活）| `#757575` 或 `#616161` |
| App Bar / Bottom Nav 反色图标 | `#FFFFFF` |
| 禁用图标 | `#9E9E9E` |

### 常用图标清单

| 图标 | 名称 | 用途 |
| ---- | ---- | ---- |
| ☰ | `menu` | App Bar 汉堡菜单 |
| 🔍 | `search` | 搜索 |
| 🔔 | `notifications` | 通知铃铛 |
| ↗ | `share` | 分享 |
| 👁 | `visibility` | 密码显示/隐藏 |
| ♥ | `favorite` / `favorite_border` | 收藏（实心 / 空心）|
| 🔖 | `bookmark` | 书签 |
| ℹ | `info` | 信息 |
| ✓ | `check_circle` | 勾选完成 |
| ✕ | `close` / `cancel` | 关闭 / 取消 |
| ＋ | `add` | 添加（FAB）|

---

## 六、组件规范详解

### 6.1 App Bar 顶部导航栏

```
背景色：  #6200EA
高度：    56px
左padding：16px
内容：    [汉堡图标 24px] [16px间距] [Page Title 20px 500 白色] [flex-grow] [搜索/铃铛/分享 24px 白色]
图标间距：8px（图标之间）
```

**CSS 示例**：
```css
.app-bar {
  background-color: #6200EA;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--elevation-2);
}
.app-bar__title {
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  flex: 1;
}
.app-bar__icon {
  color: #FFFFFF;
  width: 24px;
  height: 24px;
}
```

**FAB 叠加（App Bar 底部居中）**：
```css
.fab {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #1DE9B6;
  box-shadow: var(--elevation-6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}
```

---

### 6.2 Bottom Navigation 底部导航栏

```
背景色：  #6200EA
高度：    56px
图标大小：24px
文字大小：12px（Caption 级别）
活跃态：  图标 + 文字 #FFFFFF，背景高亮圆角区域
非活跃：  #FFFFFF，opacity: 0.6
导航项数：4项（Favorites / Search / Information / Notification）
```

**CSS 示例**：
```css
.bottom-nav {
  background-color: #6200EA;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(255,255,255,0.6);
  font-size: 12px;
}
.bottom-nav__item--active {
  color: #FFFFFF;
  background: rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 4px 12px;
}
```

---

### 6.3 Tab Bar 标签栏

```
背景色：  #6200EA
高度：    48px
Tab文字：14px，font-weight: 700，全大写，#FFFFFF
活跃下划线：#FFFFFF，height: 2px，bottom: 0
图标版：  24px 图标 + 可选文字
```

**CSS 示例**：
```css
.tab-bar {
  background-color: #6200EA;
  height: 48px;
  display: flex;
}
.tab-bar__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
}
.tab-bar__tab--active {
  color: #FFFFFF;
}
.tab-bar__tab--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #FFFFFF;
}
```

---

### 6.4 Card 卡片

```
背景色：      #FFFFFF
border-radius：4px
box-shadow：  0 2px 4px rgba(0,0,0,0.12)
图片占位高度：140–180px，背景 #BDBDBD
内容区 padding：16px
```

**普通卡片**：
```css
.card {
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08);
  overflow: hidden;
}
.card__media {
  height: 160px;
  background: #BDBDBD;
}
.card__content {
  padding: 16px;
}
.card__title {
  font-size: 20px;
  font-weight: 500;
  color: #212121;
  margin-bottom: 8px;
}
.card__subtitle {
  font-size: 14px;
  color: #757575;
}
```

**选中卡片**（selected state）：
```css
.card--selected {
  border: 2px solid #7C4DFF;
  position: relative;
}
.card--selected::after {
  content: '✓';
  position: absolute;
  top: 8px;
  right: 8px;
  color: #7C4DFF;
  font-size: 20px;
}
```

---

### 6.5 List 列表

#### 三种高度规格

```
单行列表（One-line item）：   48px 高
双行列表（Two-line item）：   72px 高
三行列表（Three-line item）： 88px 高
```

**CSS 示例**：
```css
.list-item {
  display: flex;
  align-items: center;
  min-height: 72px;  /* 双行 */
  padding: 8px 16px;
  border-bottom: 1px solid #E0E0E0;
}
/* 含头像：左侧留出 72px（16 padding + 40 avatar + 16 gap）*/
.list-item--with-avatar {
  padding-left: 72px;
  position: relative;
}
.list-item__avatar {
  position: absolute;
  left: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #BDBDBD;
}
.list-item__primary {
  font-size: 16px;
  color: #424242;
}
.list-item__secondary {
  font-size: 14px;
  color: #757575;
}
/* 选中态 */
.list-item--selected {
  background: rgba(124, 77, 255, 0.12);
}
.list-item--selected .list-item__primary {
  color: #7C4DFF;
  font-weight: 500;
}
.list-item--selected .list-item__icon {
  color: #7C4DFF;
}
```

---

### 6.6 Text Field 输入框

三种状态：

**Inactive（未激活）**：
```css
.text-field {
  background: #EEEEEE;
  border-bottom: 1px solid #9E9E9E;
  border-radius: 4px 4px 0 0;
  padding: 16px 12px 8px;
  height: 56px;
  position: relative;
}
.text-field__label {
  font-size: 12px;
  color: #757575;
  position: absolute;
  top: 8px;
}
```

**Focused（激活）**：
```css
.text-field--focused {
  border-bottom: 2px solid #7C4DFF;
}
.text-field--focused .text-field__label {
  color: #7C4DFF;
}
.text-field--focused .text-field__input {
  color: #212121;
}
```

**With Icon（含图标）**：
```css
.text-field--with-icon {
  padding-left: 48px;  /* 为左侧图标腾出空间 */
}
.text-field__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #7C4DFF;
}
.text-field__trailing-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #757575;
}
```

---

### 6.7 Button 按钮

#### Text Button（文字按钮）
```css
.btn-text {
  background: transparent;
  border: none;
  color: #7C4DFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.08em;
}
.btn-text:hover {
  background: rgba(124, 77, 255, 0.08);
}
```

#### Outlined Button（边框按钮）
```css
.btn-outlined {
  background: #FFFFFF;
  border: 1px solid #7C4DFF;
  color: #7C4DFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
}
```

#### Contained Button（实心按钮）
```css
.btn-contained {
  background: #7C4DFF;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
  box-shadow: var(--elevation-2);
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-contained:hover {
  background: #6a3dde;
  box-shadow: var(--elevation-6);
}
```

---

### 6.8 Chip 标签

```
高度：    32px
圆角：    16px（Pill 形）
padding： 0 12px
图标间距：8px
```

#### 三种状态样式

```css
/* 默认灰色 Chip */
.chip {
  height: 32px;
  border-radius: 16px;
  background: #E0E0E0;
  color: #424242;
  font-size: 14px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* 有图标（边框）Chip */
.chip--outlined {
  background: #FFFFFF;
  border: 1px solid #7C4DFF;
  color: #424242;
}
.chip--outlined .chip__icon {
  color: #7C4DFF;
}

/* 主色实心 Chip */
.chip--primary {
  background: #7C4DFF;
  color: #FFFFFF;
}
.chip--primary .chip__icon,
.chip--primary .chip__delete {
  color: #FFFFFF;
}
```

---

### 6.9 Slider 滑块

```
Track 高度：         2px
Track 未激活颜色：   #E0E0E0
Track 激活颜色：     #7C4DFF
Thumb 直径：        20px
Thumb 颜色：        #7C4DFF
两端图标：          24px，#9E9E9E
```

```css
.slider-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.slider {
  flex: 1;
  -webkit-appearance: none;
  height: 2px;
  background: linear-gradient(to right, #7C4DFF 40%, #E0E0E0 40%);
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #7C4DFF;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.slider__icon {
  color: #9E9E9E;
  font-size: 24px;
}
```

---

### 6.10 Snackbar 提示条

```
背景色：    #212121
文字颜色：  #FFFFFF，14px
Action 按钮：#7C4DFF 文字（"ACTION"），全大写
border-radius：4px
padding：  14px 16px
最大宽度：  400px
```

```css
.snackbar {
  background: #212121;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 14px 16px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--elevation-6);
  font-size: 14px;
}
.snackbar__action {
  background: transparent;
  border: none;
  color: #7C4DFF;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  padding: 4px 8px;
}
```

---

### 6.11 Data Card 数据卡片

```
标题（"Conversion"）：12px，#757575，Overline 样式
数值（"537"）：      28-32px，font-weight: 500，#212121
增幅文字：           12px，#757575
图表区域：           深紫色柱状 + 灰色柱状组合
选中卡片：           2px solid #7C4DFF 边框 + 右上角 ✓ 图标
```

```css
.data-card {
  background: #FFFFFF;
  border-radius: 4px;
  padding: 16px;
  box-shadow: var(--elevation-1);
}
.data-card__label {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #757575;
  margin-bottom: 8px;
}
.data-card__value {
  font-size: 28px;
  font-weight: 500;
  color: #212121;
  line-height: 1.2;
}
.data-card__delta {
  font-size: 12px;
  color: #757575;
  margin-top: 4px;
}
.data-card--selected {
  border: 2px solid #7C4DFF;
}
```

---

### 6.12 Radio Button 单选框

```
选中态：
  - 外圈：#7C4DFF，border: 2px solid
  - 内实心圆：#7C4DFF，直径 10px
未选中态：
  - 外圈：#9E9E9E，border: 2px solid
文字：Subtitle 1（16px），#212121
```

```css
.radio {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.radio__button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #9E9E9E;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}
.radio--selected .radio__button {
  border-color: #7C4DFF;
}
.radio--selected .radio__inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7C4DFF;
}
.radio__label {
  font-size: 16px;
  color: #212121;
}
```

---

## 附录：组件状态对照表

| 组件 | 默认态 | 悬停态 | 激活/选中态 | 禁用态 |
| ---- | ------ | ------ | ----------- | ------ |
| Button（实心） | `#7C4DFF` | `#6a3dde` | — | `opacity: 0.38` |
| Button（文字） | 透明 | `rgba(124,77,255,0.08)` | — | `opacity: 0.38` |
| Input 底边 | `#9E9E9E 1px` | `#424242 1px` | `#7C4DFF 2px` | `#9E9E9E 1px 虚线` |
| Chip | `#E0E0E0` | `#D5D5D5` | `#7C4DFF` | `opacity: 0.38` |
| 列表项背景 | 透明 | `rgba(0,0,0,0.04)` | `rgba(124,77,255,0.12)` | — |
| 单选按钮圈 | `#9E9E9E` | `#424242` | `#7C4DFF` | `#9E9E9E` |

---

> 文档版本：Ver.1.1 | 基于 Material Design Baseline Components Figma 设计稿提取
