---
name: Material design
description: This skill should be used when the user asks about "Material Design principles", "Material Design specifications", "MD design system", "Material Design color", "Material Design layout", "Material Design typography", "Material Design motion", "Material Design accessibility", "Material Theming", or needs guidance on applying Google's Material Design 2 system in general product design. Provides comprehensive reference for Google's official MD2 design principles, visual specs, layout rules, motion guidelines, and accessibility standards. Do NOT use for Kuaishou internal B-end component specs (use date-design-guidelines instead), and do NOT use for reviewing existing UI code compliance (use web-design-guidelines instead).
version: 1.0.0
---

# Material Design 2 设计规范指南

本 skill 基于 [Material Design 官网](https://m2.material.io) 整理，并直接从 **Material Design Baseline Design Kit（Figma Ver.1.00）** 提取精确数值，覆盖设计系统、设计原则、视觉规范、布局规范、动效与交互规范、无障碍规范等核心内容。

## 📂 参考文档导航

| 文档 | 内容 |
| ---- | ---- |
| `references/Material_Design_规范总结.md` | 完整设计规范总结（原则、布局、动效、无障碍）|
| `references/Typography_排版规范.md` | **13 种字体样式精确规范**（字号、字重、行高、字间距 + CSS 实现）|
| `references/Color_颜色系统规范.md` | **完整颜色系统**（主题色、On色、Primary/Secondary 完整色阶 + CSS 变量）|
| `references/States_交互状态规范.md` | **7 种交互状态规范**（Overlay 精确百分比 + CSS 实现）|
| `references/Figma_组件设计规范.md` | **12+ 组件详细规范**（App Bar、按钮、卡片、列表等完整 CSS 实现）|

> 🔑 **使用建议**：遇到具体数值问题（颜色、字号、状态），优先查阅上表对应文档。

---

## 核心设计原则

Material Design 基于**真实世界的物理规律**，有三大核心原则：

1. **材料隐喻（Material Metaphor）**  
   界面元素像现实中的纸张一样运行：有厚度（1dp）、有阴影、有层叠关系，遵循物理规律。

2. **大胆、图形化、有意图（Bold, Graphic, Intentional）**  
   版式、网格、空间、颜色是传达**层级、含义和焦点**的工具，而非仅仅装饰。

3. **有意义的动效（Motion Provides Meaning）**  
   动效解释界面变化和关系，提供连续性、反馈和空间感，应**有目的且有意义**。

---

## 视觉规范速查

### 颜色系统

| 颜色角色 | 十六进制（Baseline）| 用途 |
| -------- | ------------------- | ---- |
| Primary | `#6200EE` | 关键 UI 组件（FAB、按钮、激活状态）|
| Primary Variant | `#3700B3` | 状态栏、深色版本 |
| Secondary | `#03DAC5` | 强调、次要行为、Chip |
| Secondary Variant | `#018786` | 深色版次要色 |
| Surface | `#FFFFFF` | 卡片、列表容器表面 |
| Background | `#FFFFFF` | 页面背景 |
| Error | `#B00020` | 错误状态 |
| On Primary | `#FFFFFF` | Primary 背景上的前景色 |
| On Secondary | `#000000` | Secondary 背景上的前景色 |
| On Surface | `#000000` | Surface 上的前景色 |
| On Error | `#FFFFFF` | Error 背景上的前景色 |

- 每种颜色有从 50（最浅）到 900（最深）完整色阶
- 文本与背景对比度：正常文本 **≥ 4.5:1**，大号文本 **≥ 3:1**
- High Emphasis: `rgba(0,0,0,0.87)` / Medium: `rgba(0,0,0,0.60)` / Disabled: `rgba(0,0,0,0.38)`

> 完整色阶和 CSS 变量见 `references/Color_颜色系统规范.md`

### 字体排版

Material Design 提供 **13 种字体样式**（全部使用 Roboto 字体）：

| 样式 | 字重 | 字号 | 行高 | 字间距 |
| ---- | ---- | ---- | ---- | ------ |
| H1 | Light 300 | 96px | 112px | -1.5px |
| H2 | Light 300 | 60px | 72px | -0.5px |
| H3 | Regular 400 | 48px | 56px | 0 |
| H4 | Regular 400 | 34px | 40px | 0.25px |
| H5 | Regular 400 | 24px | 32px | 0 |
| H6 | Medium 500 | 20px | 24px | 0.15px |
| Subtitle 1 | Regular 400 | 16px | 24px | 0.15px |
| Subtitle 2 | Medium 500 | 14px | 24px | 0.10px |
| Body 1 | Regular 400 | 16px | 24px | 0.50px |
| Body 2 | Regular 400 | 14px | 20px | 0.25px |
| Button | Medium 500 | 14px | 16px | 1.25px（全大写）|
| Caption | Regular 400 | 12px | 16px | 0.40px |
| Overline | Regular 400 | 10px | 16px | 1.50px（全大写）|

> 详细 CSS 实现见 `references/Typography_排版规范.md`

### 形状系统

组件按尺寸分三类，可统一定制圆角/切角风格：
- **Small**：Chip、FAB 小、TextField
- **Medium**：Card、Dialog
- **Large**：Bottom Sheet、Navigation Drawer

---

## 交互状态速查（States）

| 状态 | Overlay 透明度 | 特殊属性 |
| ---- | -------------- | -------- |
| Enabled | 0% | 无叠加 |
| Hover | 4% | — |
| Focus | 12% | + Stroke Outline |
| Pressed | 12% | + Ripple 波纹 |
| Dragged | 8% | + Elevation 08dp |
| Selected | 8% | + 选中图标 |
| Disabled | opacity 38% 整体 | 无交互 |

> Overlay 颜色继承自组件内容色（如 Primary 按钮 Overlay 用 On Primary `#FFFFFF`）  
> 详细 CSS 实现见 `references/States_交互状态规范.md`

---

### 三原则

- **可预测**：一致的 UI 区域和空间组织
- **一致**：统一使用网格、基准线和内边距
- **响应式**：适应不同设备和屏幕尺寸

### 响应式网格断点

| 设备 | 屏幕宽度 | 外边距 | 列数 |
| ---- | -------- | ------ | ---- |
| 手机 | 0-599dp | 16dp | 4列 |
| 平板（小）| 600-904dp | 32dp | 8列 |
| 平板（大）| 905-1239dp | 流式 | 12列 |
| 笔记本 | 1240-1439dp | 200dp | 12列 |
| 桌面 | 1440dp+ | 流式 | 12列 |

### 度量单位

- 主要布局：**8dp 基准网格**
- 图标等小元素：**4dp 网格**
- 字体基线间距：**4dp 基线网格**

---

## 动效规范速查

### 持续时间参考

| 过渡大小 | 展开 | 收起 |
| -------- | ---- | ---- |
| 小型（图标、开关） | ~100ms | ~100ms |
| 中型（底部表、Chip）| 250ms | 200ms |
| 大型（全屏对话框） | 300ms | 250ms |

### 缓动类型

| 类型 | 适用场景 | CSS |
| ---- | -------- | --- |
| Standard（标准） | 最常见，起止均静止 | `cubic-bezier(0.4, 0.0, 0.2, 1)` |
| Decelerated（减速） | 元素**进入**屏幕 | `cubic-bezier(0.0, 0.0, 0.2, 1)` |
| Accelerated（加速） | 元素**退出**屏幕 | `cubic-bezier(0.4, 0.0, 1, 1)` |
| Emphasized（强调） | 需特别强调末尾 | 仅 Android 支持 |

---

## 无障碍规范速查

- **Alt text** 最大 **125 字符**，不需加"图片是..."前缀
- **Caption** 用于长描述，面向所有用户
- 若相邻文本已充分描述图片，alt 可留空（`alt=""`）
- 不要让 alt text 与 caption 重复相同内容

---

## Material Theming 定制

三个维度可定制，使产品匹配品牌风格：
1. **颜色**：自定义主色、辅助色等 5 个颜色角色
2. **字体排版**：替换 13 种样式的字体族、字重、大小写
3. **形状**：统一修改 Small/Medium/Large 三类组件的圆角样式

---

## 参考资源

- 📐 Typography 排版：`references/Typography_排版规范.md`
- 🎨 Color 颜色系统：`references/Color_颜色系统规范.md`
- 🖱️ States 交互状态：`references/States_交互状态规范.md`
- 🧩 组件详细规范：`references/Figma_组件设计规范.md`
- 📄 完整设计原则：`references/Material_Design_规范总结.md`
- 🌐 官方网站：https://m2.material.io/design/introduction
- 🛠 颜色工具：https://m2.material.io/inline-tools/color/
- 📐 Figma 资源：https://figma.com/@materialdesign
