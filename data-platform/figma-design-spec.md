# DataInsight 数据平台主页 — Figma 设计规格说明

> **配套资源**：建议在 Figma 中先导入 [Material Design 2 官方 Kit](https://www.figma.com/community/file/984135372180196965) 后，再按本文档逐步搭建。
>
> 本文档覆盖：Design Tokens、组件规格、布局尺寸、间距系统、颜色/字体/阴影、各区域详细说明。

---

## 一、画布设置

| 属性 | 值 |
|------|-----|
| 画布尺寸 | 1440 × 900 px（Desktop Large Frame） |
| 背景色 | `#F5F5F5`（Background） |
| 单位 | px（对应 dp，1dp = 1px @ 1×） |
| 网格 | 12列网格，外边距 80px，列间距 24px |
| 基线网格 | 8px 软网格（Layout Grid → Grid，Size: 8） |

---

## 二、Design Tokens（设计令牌）

> 在 Figma 中创建 **Local Styles**，命名规范参考下方。

### 2.1 颜色系统

#### 主色板（Create Color Styles）

| Style 名称 | HEX | 用途 |
|-----------|-----|------|
| `primary/500` | `#6200EE` | 主色，App Bar、按钮、激活状态 |
| `primary/700` | `#3700B3` | 主色深，按钮 hover |
| `primary/50` | `#EDE7F6` | 主色浅，图标背景、激活 nav 背景 |
| `secondary/400` | `#03DAC6` | 辅色，FAB、徽标点缀 |
| `secondary/700` | `#018786` | 辅色深 |
| `background` | `#F5F5F5` | 页面背景 |
| `surface` | `#FFFFFF` | 卡片、抽屉、表格背景 |
| `error` | `#B00020` | 错误状态 |
| `on/primary` | `#FFFFFF` | 主色上的文字/图标 |
| `on/secondary` | `#000000` | 辅色上的文字/图标 |
| `on/background` | `#000000` | 背景上高强调文字 |
| `on/surface/high` | `rgba(0,0,0,0.87)` | 表面高强调文字 |
| `on/surface/medium` | `rgba(0,0,0,0.60)` | 表面中强调文字/图标 |
| `on/surface/disabled` | `rgba(0,0,0,0.38)` | 禁用状态 |
| `semantic/success` | `#2E7D32` | 成功状态文字 |
| `semantic/success-bg` | `#E8F5E9` | 成功状态背景 |
| `semantic/warning` | `#E65100` | 警告状态文字 |
| `semantic/warning-bg` | `#FFF3E0` | 警告状态背景 |
| `semantic/info` | `#1565C0` | 信息状态文字 |
| `semantic/info-bg` | `#E3F2FD` | 信息状态背景 |
| `semantic/error-bg` | `#FFEBEE` | 错误状态背景 |

---

### 2.2 字体样式（Create Text Styles）

> 字体族：**Roboto**（需在 Figma 中安装）/ 中文备用：**PingFang SC**

| Style 名称 | Font | Size | Weight | Line Height | Letter Spacing | 用途 |
|-----------|------|------|--------|-------------|----------------|------|
| `type/h4` | Roboto | 34 | Regular (400) | 42 | +0.25 | 页面主标题 |
| `type/h6` | Roboto | 20 | Medium (500) | 32 | +0.15 | 卡片标题、section 标题 |
| `type/subtitle1` | Roboto | 16 | Regular (400) | 28 | +0.15 | 副标题、导航标签 |
| `type/subtitle2` | Roboto | 14 | Medium (500) | 24 | +0.10 | 表格表头 |
| `type/body1` | Roboto | 16 | Regular (400) | 28 | +0.50 | 正文主要内容 |
| `type/body2` | Roboto | 14 | Regular (400) | 24 | +0.25 | 正文次要、表格内容 |
| `type/button` | Roboto | 14 | Medium (500) | 16 | +1.25 | 按钮文字（全大写） |
| `type/caption` | Roboto | 12 | Regular (400) | 16 | +0.40 | 辅助说明、时间戳 |
| `type/overline` | Roboto | 10 | Regular (400) | 16 | +1.50 | 分类标签（全大写） |

---

### 2.3 阴影效果（Create Effect Styles）

| Style 名称 | 效果值 | 对应海拔 | 用途 |
|-----------|--------|---------|------|
| `elevation/1` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)` | 1dp | 卡片默认状态 |
| `elevation/2` | `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)` | 2dp | 卡片 hover |
| `elevation/4` | `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)` | 4dp | 卡片 hover 深 |
| `elevation/6` | `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)` | 6dp | FAB |
| `elevation/8` | `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)` | 8dp | Nav Drawer（移动端打开）|
| `elevation/app-bar` | `0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)` | App Bar | 顶部导航栏 |

---

### 2.4 圆角（Shape System）

| 类别 | 圆角值 | 适用组件 |
|------|--------|---------|
| Small | `4px` | 按钮、Chip、Badge、输入框 |
| Medium | `8px` | 卡片（Card）、告警条、最近使用卡片 |
| Large | `16px` | 底部弹层（Mobile Bottom Sheet） |
| Circular | `50%` | Avatar、FAB、Badge 圆点 |
| Pill | `24px` | Nav 激活状态、Status Badge、Chip |

---

## 三、布局结构

### 3.1 整体页面骨架（Auto Layout 推荐设置）

```
Frame: Desktop (1440 × 900)
├── App Bar                     ← Fixed Top, H: 64px, Fill Width
├── Body (Auto Layout · Horizontal)
│   ├── Nav Drawer              ← Fixed Left, W: 256px, Fill Height
│   └── Main Content            ← Fill, Padding: 24px, Vertical Auto Layout
│       ├── Page Header
│       ├── KPI Grid (4列)
│       ├── Charts Row (折线图 + 饼图)
│       ├── Dual Column (任务表 + 告警)
│       └── Recently Used (5列)
```

---

## 四、组件规格详解

### 4.1 App Bar（顶部导航栏）

| 属性 | 值 |
|------|-----|
| 宽度 | Fill（100%） |
| 高度 | 64px |
| 背景色 | `primary/500` → `#6200EE` |
| 阴影 | `elevation/app-bar` |
| 层级 | Z: 100（最顶层） |
| 内边距 | Left: 8px, Right: 16px |
| 内容对齐 | Horizontal Auto Layout，Align Center Vertical |

**内部元素：**

| 元素 | 规格 |
|------|------|
| Menu 图标按钮 | 48×48px，圆角 50%，Icon: menu（24px），颜色: `on/primary` |
| Logo 图标 | Material Icons: `insights`，28px，颜色: `secondary/400` |
| 品牌名 "DataInsight" | `type/h6`，颜色: `on/primary` |
| 搜索框 | Max-W: 560px，H: 40px，圆角 4px，背景: `rgba(255,255,255,0.15)`，内边距: 0 12px |
| 搜索图标 | 20px，颜色: `rgba(255,255,255,0.7)` |
| 搜索占位文字 | `type/body1`，颜色: `rgba(255,255,255,0.6)` |
| 通知按钮 | 48×48px，圆角 50%，右上角 Badge（W/H: 16px，背景: `secondary/400`） |
| 设置按钮 | 48×48px，圆角 50% |
| 用户 Avatar | 40×40px，圆角 50%，背景: `secondary/400`，文字: `type/button`，颜色: `on/secondary` |

---

### 4.2 Navigation Drawer（侧边导航）

| 属性 | 值 |
|------|-----|
| 宽度 | 256px |
| 高度 | Fill（100vh - 64px） |
| 背景色 | `surface` → `#FFFFFF` |
| 右边框 | 1px solid `rgba(0,0,0,0.08)` |
| 阴影 | 无（桌面端）/ `elevation/8`（移动端展开时） |

**Header 区：**
- 高度: ~56px
- 内边距: 16px
- Workspace Label: `type/overline`，颜色: `on/surface/medium`，文字: "工作空间"
- Workspace Name: `type/body2` Medium，颜色: `on/surface/high`，文字: "技术分析部"
- 底部分割线: 1px `rgba(0,0,0,0.08)`

**导航项（Nav Item）规格：**

| 状态 | 背景 | 文字颜色 | 图标颜色 |
|------|------|---------|---------|
| 默认 | 透明 | `on/surface/medium` | `on/surface/medium` |
| Hover | `rgba(0,0,0,0.04)` | `on/surface/high` | `on/surface/high` |
| 激活 Active | `primary/50` `#EDE7F6` | `primary/500` | `primary/500` |

| 属性 | 值 |
|------|-----|
| 高度 | 48px |
| 左边距 | 16px |
| 右边距 | 8px（整体偏移，留出圆角空间） |
| 右侧圆角 | 24px（右侧两角圆角，左侧直角） |
| 图标尺寸 | 24px |
| 图标与文字间距 | 16px |
| 文字样式 | `type/body2`，激活时 `type/subtitle2` |

**分割线：** 高度 1px，`rgba(0,0,0,0.08)`，外边距 8px 16px

**子标题（Subheader）：** `type/overline`，颜色: `on/surface/disabled`，内边距: 12px 16px 4px

---

### 4.3 KPI 指标卡片

**卡片容器：**

| 属性 | 值 |
|------|-----|
| 宽度 | Fill（12列网格，每列占3列） |
| 最小宽度 | 220px |
| 背景 | `surface` `#FFFFFF` |
| 圆角 | 8px（Medium） |
| 阴影 | `elevation/1` |
| 内边距 | 20px |
| Hover 阴影 | `elevation/4` + `translateY(-2px)` |

**图标容器：**

| 类型 | 背景色 | 图标颜色 | 尺寸 |
|------|--------|---------|------|
| Primary（存储） | `#EDE7F6` | `#6200EE` | 48×48px，圆角 8px |
| Secondary（数据集） | `#E0F7FA` | `#018786` | 48×48px，圆角 8px |
| Success（成功率） | `#E8F5E9` | `#2E7D32` | 48×48px，圆角 8px |
| Warning（API） | `#FFF3E0` | `#E65100` | 48×48px，圆角 8px |

**数值文字：** Size 32px，Weight 400，Letter Spacing -0.02em，颜色: `on/surface/high`

**单位/标签文字：** `type/body2`，颜色: `on/surface/medium`

**底部趋势区：**
- 分割线: 1px `rgba(0,0,0,0.06)`，Padding Top: 8px
- 趋势箭头图标: 16px
- 趋势文字: `type/caption`，上涨: `#2E7D32`，下降: `#B00020`
- 比较说明: `type/caption`，颜色: `on/surface/disabled`

---

### 4.4 折线图卡片

| 属性 | 值 |
|------|-----|
| 宽度 | 约 2/3 画布宽度（12列中占8列） |
| 背景 | `surface` |
| 圆角 | 8px |
| 阴影 | `elevation/1` |
| 内边距 | 20px |

**图表区域占位：** 宽度 Fill，高度 220px，背景: `rgba(98,0,238,0.02)` 渐变（顶部浅紫 → 透明）

**时间切换 Tab：**
- 容器背景: `background` `#F5F5F5`，圆角 4px，内边距 4px
- 激活 Tab: `surface` 白色，阴影 `elevation/1`，颜色 `primary/500`
- 非激活 Tab: 透明背景，颜色 `on/surface/medium`
- Tab 文字: `type/caption` Medium，全大写，字符间距 +1.25

---

### 4.5 饼图/环形图卡片

| 属性 | 值 |
|------|-----|
| 宽度 | 约 1/3 画布宽度（12列中占4列） |
| 背景 | `surface` |
| 圆角 | 8px |
| 阴影 | `elevation/1` |
| 内边距 | 20px |

**环形图占位：** 直径 200px，居中
- 外圆半径: 78px
- 内圆（挖空）半径: 44px
- 中心文字: "数据源" `type/caption`，"5 类" `type/h6`

**图例（Legend）：**
- 圆点: 10×10px，圆角 50%
- 文字: `type/caption`，颜色 `on/surface/medium`
- 排列: 2列网格，间距: 行8px 列16px

| 数据源 | 颜色 | 占比 |
|--------|------|------|
| MySQL | `#6200EE` | 38% |
| Kafka | `#03DAC6` | 25% |
| HDFS | `#FF6D00` | 18% |
| API | `#1976D2` | 12% |
| 其他 | `#43A047` | 7% |

---

### 4.6 任务状态表格

**卡片容器：**
- 背景: `surface`，圆角: 8px，阴影: `elevation/1`，溢出隐藏
- 无内边距（表格撑满卡片）

**表头行：**
- 高度: 48px，内边距: 0 16px
- 文字: `type/subtitle2`，颜色: `on/surface/medium`
- 底部边框: 1px `rgba(0,0,0,0.08)`

**数据行：**
- 高度: 52px，内边距: 0 16px
- 文字: `type/body2`，颜色: `on/surface/high`
- 行分割线: 1px `rgba(0,0,0,0.04)`
- Hover: 背景 `rgba(0,0,0,0.02)`

**任务名称单元格：** 图标(18px) + 间距8px + 文字，图标颜色 `on/surface/medium`

**状态徽标（Status Badge）：**

| 状态 | 背景 | 文字颜色 | 文字 |
|------|------|---------|------|
| 成功 | `#E8F5E9` | `#2E7D32` | 成功 |
| 失败 | `#FFEBEE` | `#B00020` | 失败 |
| 运行中 | `#E3F2FD` | `#1565C0` | 运行中 |

Status Badge 规格: 高 22px，内边距 0 10px，圆角 12px（Pill），文字 `type/caption` Medium

---

### 4.7 告警通知条

**告警项容器：**
- 背景: `surface`，圆角: 8px，阴影: `elevation/1`
- 内边距: 14px 16px
- **左侧彩色边框** (Border Left 4px)
- 布局: Horizontal Auto Layout，Align Top，间距 12px

| 告警级别 | 左边框色 | 背景色 | 图标颜色 |
|---------|---------|--------|---------|
| 错误 | `#B00020` | `#FFFAFA` | `#B00020` |
| 警告 | `#FF6D00` | `#FFFDF7` | `#E65100` |
| 信息 | `#1976D2` | `#F8FBFF` | `#1565C0` |
| 成功 | `#43A047` | `#F7FFF8` | `#2E7D32` |

**图标：** 22px，`on/surface/high`，顶部对齐
**标题：** `type/body2` Medium，颜色 `on/surface/high`
**描述：** `type/caption`，颜色 `on/surface/medium`，行高 1.4
**时间：** `type/overline`（10px），颜色 `on/surface/disabled`
**关闭按钮：** 36×36px，圆角 50%，图标 20px

---

### 4.8 最近使用卡片

**卡片容器：**
- 宽度: Fill（5列中各占1列，约208px）
- 背景: `surface`，圆角: 8px，阴影: `elevation/1`
- Hover: 阴影 `elevation/4` + `translateY(-4px)`
- 溢出: 隐藏

**缩略图区：**
- 高度: 96px，Fill Width
- 渐变背景（135°线性渐变）:

| 类型 | 渐变起 | 渐变止 | 图标颜色 |
|------|--------|--------|---------|
| 报表/图表 | `#EDE7F6` | `#D1C4E9` | `#6200EE` |
| 看板 | `#E0F7FA` | `#B2EBF2` | `#018786` |
| 数据集 | `#E8F5E9` | `#C8E6C9` | `#2E7D32` |

图标尺寸: 40px，居中，透明度 70%

**信息区：** 内边距 12px，Vertical Auto Layout，间距 8px
- 名称: `type/subtitle2`，颜色 `on/surface/high`，单行截断
- Meta 行: 水平布局，Chip + 时间文字

**Chip（类型标签）：**
- 高度: 20px，内边距: 2px 6px，圆角 12px
- 背景: `background` `#F5F5F5`，边框 1px `rgba(0,0,0,0.12)`
- 图标: 12px，文字: `type/overline`，颜色 `on/surface/medium`

---

### 4.9 按钮组件

#### Contained Button（实心按钮）

| 属性 | 值 |
|------|-----|
| 高度 | 36px |
| 内边距 | 0 16px |
| 圆角 | 4px（Small） |
| 背景 | `primary/500` `#6200EE` |
| 文字颜色 | `on/primary` `#FFFFFF` |
| 文字样式 | `type/button` |
| 阴影 | `elevation/1` |
| Hover 阴影 | `elevation/2` |
| 图标尺寸 | 18px，间距 8px |

#### Outlined Button（描边按钮）

| 属性 | 值 |
|------|-----|
| 高度 | 36px |
| 内边距 | 0 16px |
| 圆角 | 4px |
| 背景 | 透明 |
| 边框 | 1px `rgba(98,0,238,0.5)` |
| 文字颜色 | `primary/500` |
| Hover 背景 | `rgba(98,0,238,0.04)` |

---

### 4.10 FAB（悬浮操作按钮）

| 属性 | 值 |
|------|-----|
| 尺寸 | 56×56px |
| 圆角 | 50%（完整圆形） |
| 背景 | `secondary/400` `#03DAC6` |
| 图标颜色 | `on/secondary` `#000000` |
| 图标 | `add`，24px |
| 阴影 | `elevation/6` |
| Hover 阴影 | `elevation/8` |
| 位置 | 固定，右下角，Margin: 24px |

---

### 4.11 Snackbar（底部提示条）

| 属性 | 值 |
|------|-----|
| 最小宽度 | 288px |
| 最大宽度 | 568px |
| 高度 | 48px（单行） |
| 圆角 | 4px |
| 背景 | `#323232` |
| 文字颜色 | `#FFFFFF` |
| 文字样式 | `type/body2` |
| 操作按钮文字 | `type/button`，颜色 `secondary/400` |
| 内边距 | 0 16px |
| 阴影 | `elevation/6` |
| 位置 | 底部居中，Margin Bottom: 24px |

---

## 五、间距规范（8dp 网格系统）

> Figma 中所有间距、内边距数值均须为 **4 的倍数**，推荐使用 **8 的倍数**。

| 场景 | 间距值 |
|------|--------|
| 卡片间距（Grid Gap） | 16px |
| 卡片内边距 | 20px |
| 页面内边距 | 24px（桌面） / 16px（平板） / 12px（手机） |
| Section 间距 | 32px |
| 表格行内边距 | 0 16px |
| 导航项高度 | 48px |
| 表格行高度 | 52px |
| 按钮高度 | 36px |
| Icon Button | 48×48px（标准） / 36×36px（小型） |
| 元素间最小间距 | 4px |
| 图标与文字间距 | 8px（普通）/ 16px（导航） |

---

## 六、响应式断点

| 断点 | 宽度 | 列数 | 外边距 | 导航 |
|------|------|------|--------|------|
| Desktop Large | ≥1440px | 12列 | 流式 | 侧边固定 256px |
| Desktop | 1240-1439px | 12列 | 200px | 侧边固定 256px |
| Tablet Large | 905-1239px | 12列 | 流式 | 侧边固定 256px |
| Tablet | 600-904px | 8列 | 32px | 侧边隐藏（抽屉模式） |
| Mobile | 0-599px | 4列 | 16px | 侧边隐藏（全屏抽屉） |

---

## 七、Figma 操作步骤建议

### 第一步：准备工作

1. 在 Figma 中新建文件，命名为 **DataInsight - 数据平台**
2. 从 [Material Design 2 Kit](https://www.figma.com/community/file/984135372180196965) 复制以下组件到文件：
   - App Bar
   - Navigation Drawer
   - Cards
   - Buttons (Contained + Outlined)
   - FAB
   - Data Table
   - Chips
   - Snackbar

### 第二步：建立 Local Styles

按照 **第二章 Design Tokens** 逐一创建：
- ✅ Color Styles（20个颜色）
- ✅ Text Styles（9种字体）
- ✅ Effect Styles（6种阴影）

### 第三步：创建 Frame

```
新建 Frame → Desktop (1440 × 900)
→ 添加 Layout Grid（12列，Margin: 80px，Gutter: 24px）
→ 添加 Grid（Size: 8px，颜色: rgba(0,0,0,0.05)）
```

### 第四步：搭建顺序

按照以下顺序逐层搭建（避免返工）：

```
1. App Bar（Fixed, Z最高）
2. Nav Drawer（Fixed Left）
3. Main Content Frame（Auto Layout Vertical, Gap: 32px, Padding: 24px）
   3.1 Page Header（水平 Auto Layout）
   3.2 KPI Grid（水平 Auto Layout, Gap: 16px）
   3.3 Charts Row（水平 Auto Layout, Gap: 16px）
   3.4 Dual Column（水平 Auto Layout, Gap: 16px）
   3.5 Recently Used Grid（水平 Auto Layout, Gap: 16px）
4. FAB（Fixed, 右下角）
5. Snackbar（Fixed, 底部居中）
```

### 第五步：图表占位处理

由于 Figma 不运行 JS，图表区域建议：
- **折线图区**：用 `Rectangle`（Fill 渐变紫色）+ 折线路径（Vector 工具）模拟
- **环形图**：用 Figma 的 `Ellipse` + Boolean Operation（相减）制作环形
- 或直接使用占位矩形标注 "折线图区域" 用于交付给开发

---

## 八、组件树结构（Layer 命名规范）

```
📄 DataInsight - Homepage
├── 🔲 App Bar
│   ├── 🔷 Nav Group
│   │   ├── 🔘 Menu Button
│   │   └── 🔷 Logo
│   ├── 🔷 Search Bar
│   └── 🔷 Actions
│       ├── 🔘 Notification Button
│       ├── 🔘 Settings Button
│       └── ⭕ Avatar
├── 🔲 Nav Drawer
│   ├── 🔷 Header
│   └── 📋 Nav List
│       ├── 🔷 Nav Item [Active] / 总览看板
│       ├── 🔷 Nav Item / 数据分析
│       ├── ─── Divider ───
│       └── ...
├── 🔲 Main Content
│   ├── 🔷 Page Header
│   ├── 🔲 KPI Grid
│   │   ├── 🃏 Metric Card / 今日数据量
│   │   ├── 🃏 Metric Card / 活跃数据集
│   │   ├── 🃏 Metric Card / 任务成功率
│   │   └── 🃏 Metric Card / API调用次数
│   ├── 🔲 Charts Row
│   │   ├── 🃏 Line Chart Card
│   │   └── 🃏 Pie Chart Card
│   ├── 🔲 Dual Column
│   │   ├── 🃏 Task Table Card
│   │   └── 🃏 Alert List
│   └── 🔲 Recently Used
│       ├── 🃏 Recent Card / 用户增长分析
│       └── ...
├── ⭕ FAB
└── 🔲 Snackbar
```

---

## 九、交付说明

| 资产 | 说明 |
|------|------|
| 代码文件 | `data-platform/index.html` + `styles.css` + `charts.js` |
| 颜色标注 | 见本文档第二章 |
| 字体标注 | 见本文档第二章，字体文件: Google Fonts Roboto |
| 切图规范 | 图标使用 Material Icons 字体，无需单独切图 |
| 响应式 | 已实现 4/8/12 列网格自适应，见第六章 |
| 动效 | 缓动曲线、持续时间见 CSS `--md-easing-*` 变量 |
