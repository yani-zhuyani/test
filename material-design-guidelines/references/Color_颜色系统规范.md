# Material Design Color 颜色系统规范

> 来源：Material Design Baseline Design Kit（Figma Ver.1.00）  
> 颜色节点数据来自 figma-242-26541（颜色色板）与 figma-0-3319（完整规范总览图）

---

## 一、主题颜色总览（Theme Colors）

### Baseline 默认主题

| 角色 | 颜色名 | 十六进制值 | 说明 |
| ---- | ------ | ---------- | ---- |
| **Primary** | Primary 500 | `#6200EE` | 品牌主色，用于 App Bar、按钮、FAB 等主要 UI |
| **Primary Variant** | Primary 700 | `#3700B3` | 主色变体，用于状态栏背景等深色版本 |
| **Secondary** | Secondary 200 | `#03DAC5` | 品牌辅色，用于 FAB、Chip、选中状态等 |
| **Secondary Variant** | Secondary 700 | `#018786` | 辅色变体，深色场景 |
| **Background** | — | `#FFFFFF` | 页面/屏幕背景 |
| **Surface** | — | `#FFFFFF` | 卡片、Sheet、菜单等组件表面 |
| **Error** | — | `#B00020` | 错误状态提示色 |

### On 颜色（文字/图标覆盖色）

| 角色 | 十六进制值 | 适用于 |
| ---- | ---------- | ------ |
| **On Primary** | `#FFFFFF` | Primary 背景上的文字/图标 |
| **On Secondary** | `#000000` | Secondary 背景上的文字/图标 |
| **On Background** | `#000000` | 背景层上的文字/图标 |
| **On Surface** | `#000000` | Surface 组件上的文字/图标 |
| **On Error** | `#FFFFFF` | Error 背景上的文字/图标 |

---

## 二、On Surface 文字强调层级

| 层级 | 颜色 | 不透明度 | 用途 |
| ---- | ---- | -------- | ---- |
| **High Emphasis** | `#000000` | 87%（`#000000DE`）| 主要文字、标题、重要正文 |
| **Medium Emphasis** | `#000000` | 60%（`#00000099`）| 次要文字、说明文字 |
| **Disabled** | `#000000` | 38%（`#00000061`）| 禁用状态的文字/图标 |

```css
:root {
  --color-emphasis-high:   rgba(0, 0, 0, 0.87);  /* #000000DE */
  --color-emphasis-medium: rgba(0, 0, 0, 0.60);  /* #00000099 */
  --color-emphasis-disabled: rgba(0, 0, 0, 0.38); /* #00000061 */
}
```

---

## 三、Primary 紫色完整色阶

| 色号 | 十六进制 | 视觉 | 典型用途 |
| ---- | -------- | ---- | -------- |
| **900** | `#23036A` | 极深紫 | 最深版本，深色 App Bar |
| **800** | `#3700B3` | 深紫（Variant）| Primary Variant / 状态栏 |
| **700** | `#4B01D0` | 深紫 | — |
| **600** | `#5C01E2` | 中深紫 | — |
| **500** ✅ | `#6200EE` | **主色** | App Bar、按钮、FAB |
| **400** | `#7F39FB` | 中紫 | — |
| **300** | `#985EFF` | 浅紫 | — |
| **200** | `#BB86FC` | 浅色 | 深色主题下的 Primary |
| **100** | `#DDB6FF` | 极浅紫 | — |
| **50** | `#F3E5FF` | 最浅 | 背景色、hover 状态 |

> **Figma 数据来源**：  
> - 900: `#23036A`（节点 id: 242:26686, 242:26685 背景色）  
> - 500: `#6200EE`（节点 id: 242:26697, 文本内容 "#6200EE"）  
> - 400: `#7F39FB`（节点 id: 242:26720, 文本内容 "#7F39FB"）  
> - 最浅: `Primary l 200` 标记为 `#6200EE` 来源区域

---

## 四、Secondary 青绿色完整色阶

| 色号 | 十六进制 | 视觉 | 典型用途 |
| ---- | -------- | ---- | -------- |
| **700** ✅ | `#018786` | 深青绿（Variant）| Secondary Variant |
| **600** | `#009FAB` | 中深青绿 | — |
| **500** | `#00BCD4` | 中青绿 | — |
| **400** | `#1DE9D6` | 青绿 | — |
| **300** | `#66FFF0` | 浅青绿 | — |
| **200** ✅ | `#03DAC5` | **辅色主色** | FAB、Chip、Toggle |
| **100** | `#CCFFF6` | 极浅青绿 | — |
| **50** | `#E5F9F7` | 最浅 | 背景 hover |

---

## 五、语义色（Semantic Colors）

| 颜色 | 十六进制 | 用途 |
| ---- | -------- | ---- |
| Error | `#B00020` | 错误信息、输入框错误状态 |
| Success（推荐）| `#4CAF50` | 成功提示（非官方必须）|
| Warning（推荐）| `#FF9800` | 警告提示（非官方必须）|

---

## 六、CSS 变量完整定义

```css
/* =============================================
   Material Design Color System — CSS Variables
   Baseline Theme (Ver.1.00)
   ============================================= */
:root {
  /* === Theme Colors === */
  --color-primary:           #6200EE;
  --color-primary-variant:   #3700B3;
  --color-secondary:         #03DAC5;
  --color-secondary-variant: #018786;
  --color-background:        #FFFFFF;
  --color-surface:           #FFFFFF;
  --color-error:             #B00020;

  /* === On Colors === */
  --color-on-primary:     #FFFFFF;
  --color-on-secondary:   #000000;
  --color-on-background:  #000000;
  --color-on-surface:     #000000;
  --color-on-error:       #FFFFFF;

  /* === Text Emphasis (On Surface) === */
  --color-high-emphasis:    rgba(0, 0, 0, 0.87);
  --color-medium-emphasis:  rgba(0, 0, 0, 0.60);
  --color-disabled:         rgba(0, 0, 0, 0.38);

  /* === Primary Scale === */
  --color-primary-900:   #23036A;
  --color-primary-800:   #3700B3;
  --color-primary-700:   #4B01D0;
  --color-primary-600:   #5C01E2;
  --color-primary-500:   #6200EE;   /* Main Primary */
  --color-primary-400:   #7F39FB;
  --color-primary-300:   #985EFF;
  --color-primary-200:   #BB86FC;
  --color-primary-100:   #DDB6FF;
  --color-primary-50:    #F3E5FF;

  /* === Secondary Scale === */
  --color-secondary-700:   #018786;  /* Secondary Variant */
  --color-secondary-600:   #009FAB;
  --color-secondary-500:   #00BCD4;
  --color-secondary-400:   #1DE9D6;
  --color-secondary-300:   #66FFF0;
  --color-secondary-200:   #03DAC5;  /* Main Secondary */
  --color-secondary-100:   #CCFFF6;
  --color-secondary-50:    #E5F9F7;
}
```

---

## 七、颜色使用规则

### 7.1 Primary 使用规范

```
✅ 适用场景：
  - App Bar 背景色（背景用 Primary，文字用 On Primary 即 #FFFFFF）
  - Contained Button 背景
  - FAB（Floating Action Button）背景
  - 复选框、单选框选中态
  - Tab 指示条

❌ 不适用：
  - 大面积背景（用 Background）
  - 普通正文（用 On Surface 强调层级）
```

### 7.2 Secondary 使用规范

```
✅ 适用场景：
  - FAB（次要操作）
  - 进度条/滑块
  - Chip 选中态
  - Toggle/Switch 开启态
  - Snackbar 按钮文字

❌ 不适用：
  - 替代 Primary 用于主要导航
  - 文字颜色（因青绿色对比度不足）
```

### 7.3 颜色对比度规则（WCAG 2.1 AA 标准）

| 文字类型 | 最低对比度 | 建议组合 |
| -------- | ---------- | -------- |
| 正文（≥18px） | 3:1 | `#FFFFFF` on `#6200EE` ✅ |
| 小字（<18px） | 4.5:1 | `#000000DE` on `#FFFFFF` ✅ |
| 图标 | 3:1 | `#FFFFFF` on `#3700B3` ✅ |

---

## 八、深色主题颜色映射

| 角色 | 浅色主题 | 深色主题推荐 |
| ---- | -------- | ------------ |
| Primary | `#6200EE` | `#BB86FC`（Primary 200）|
| Primary Variant | `#3700B3` | `#3700B3` |
| Secondary | `#03DAC5` | `#03DAC5` |
| Background | `#FFFFFF` | `#121212` |
| Surface | `#FFFFFF` | `#1E1E1E` |
| Error | `#B00020` | `#CF6679` |
| On Primary | `#FFFFFF` | `#000000` |
| On Secondary | `#000000` | `#000000` |

---

## 九、Figma 数据溯源

以下颜色值直接来自 Figma 节点（`figma-242-26541-oINEzJJHVk26tPc31kdRIW.json`）：

| 颜色名称 | 背景/文本 HEX | Figma 节点 ID |
| -------- | ------------- | ------------ |
| Primary（主背景）| `#6200EE` | 242:26559 |
| On Primary | `#FFFFFF`（文字颜色）| 242:26777 |
| Secondary（主背景）| `#03DAC5` | 242:26592 |
| On Secondary | `#000000`（文字颜色）| 242:26766 |
| Background（主背景）| `#FFFFFF` | 242:26613 |
| On Background | `#000000`（文字颜色）| 242:26758 |
| Surface（主背景）| `#FFFFFF` | 242:26632 |
| On Surface | `#000000`（文字颜色）| 242:26750 |
| Error（主背景）| `#B00020` | 242:26649 |
| On Error | `#FFFFFF`（文字颜色）| 242:26743 |
| Primary 500 | `#6200EE` | 242:26697（文本节点）|
| Primary 900 | `#23036A` | 242:26703（文本节点）|
| Primary 400 | `#7F39FB` | 242:26720（文本节点）|
