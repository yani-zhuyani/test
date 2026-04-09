# Material Design Typography 排版规范

> 来源：Material Design Baseline Design Kit（Figma Ver.1.00）  
> 字体族：**Roboto**（所有样式统一使用，可通过 fonts.google.com 替换）

---

## 一、完整字体样式规范表

| 样式名称 | 字重（Weight）| 字号 | 行高 | 字母间距 | 大小写 | 典型用途 |
| -------- | ------------- | ---- | ---- | -------- | ------ | -------- |
| **Headline 1** | Light (300) | 96px | 112px | -1.5px | 正常 | 最大展示标题，极少用，通常用于数字展示 |
| **Headline 2** | Light (300) | 60px | 72px | -0.5px | 正常 | 大型展示标题 |
| **Headline 3** | Regular (400) | 48px | 56px | 0 | 正常 | 大型页面标题 |
| **Headline 4** | Regular (400) | 34px | 40px | 0.25px | 正常 | 中型标题 |
| **Headline 5** | Regular (400) | 24px | 32px | 0 | 正常 | 卡片、对话框标题 |
| **Headline 6** | Medium (500) | 20px | 24px | 0.15px | 正常 | App Bar 标题、卡片标题 |
| **Subtitle 1** | Regular (400) | 16px | 24px | 0.15px | 正常 | 列表主文字、副标题 |
| **Subtitle 2** | Medium (500) | 14px | 24px | 0.10px | 正常 | 列表次要文字 |
| **Body 1** | Regular (400) | 16px | 24px | 0.50px | 正常 | 主要正文内容 |
| **Body 2** | Regular (400) | 14px | 20px | 0.25px | 正常 | 辅助正文、卡片描述 |
| **Button** | Medium (500) | 14px | 16px | 1.25px | **全大写** | 按钮文字、Tab 标签 |
| **Caption** | Regular (400) | 12px | 16px | 0.40px | 正常 | 图片说明、时间戳 |
| **Overline** | Regular (400) | 10px | 16px | 1.50px | **全大写** | 分类标签、卡片标注 |

---

## 二、CSS 变量定义

```css
/* Typography Scale — Material Design Baseline */
:root {
  --font-family:    'Roboto', sans-serif;
  --font-family-mono: 'Roboto Mono', monospace;

  /* Headline 1 */
  --h1-size:    96px;
  --h1-weight:  300;
  --h1-lh:      112px;
  --h1-ls:      -1.5px;

  /* Headline 2 */
  --h2-size:    60px;
  --h2-weight:  300;
  --h2-lh:      72px;
  --h2-ls:      -0.5px;

  /* Headline 3 */
  --h3-size:    48px;
  --h3-weight:  400;
  --h3-lh:      56px;
  --h3-ls:      0;

  /* Headline 4 */
  --h4-size:    34px;
  --h4-weight:  400;
  --h4-lh:      40px;
  --h4-ls:      0.25px;

  /* Headline 5 */
  --h5-size:    24px;
  --h5-weight:  400;
  --h5-lh:      32px;
  --h5-ls:      0;

  /* Headline 6 */
  --h6-size:    20px;
  --h6-weight:  500;
  --h6-lh:      24px;
  --h6-ls:      0.15px;

  /* Subtitle 1 */
  --subtitle1-size:   16px;
  --subtitle1-weight: 400;
  --subtitle1-lh:     24px;
  --subtitle1-ls:     0.15px;

  /* Subtitle 2 */
  --subtitle2-size:   14px;
  --subtitle2-weight: 500;
  --subtitle2-lh:     24px;
  --subtitle2-ls:     0.10px;

  /* Body 1 */
  --body1-size:   16px;
  --body1-weight: 400;
  --body1-lh:     24px;
  --body1-ls:     0.50px;

  /* Body 2 */
  --body2-size:   14px;
  --body2-weight: 400;
  --body2-lh:     20px;
  --body2-ls:     0.25px;

  /* Button */
  --btn-size:      14px;
  --btn-weight:    500;
  --btn-lh:        16px;
  --btn-ls:        1.25px;
  --btn-transform: uppercase;

  /* Caption */
  --caption-size:   12px;
  --caption-weight: 400;
  --caption-lh:     16px;
  --caption-ls:     0.40px;

  /* Overline */
  --overline-size:      10px;
  --overline-weight:    400;
  --overline-lh:        16px;
  --overline-ls:        1.50px;
  --overline-transform: uppercase;
}
```

---

## 三、CSS 类实现

```css
/* Headline 1 */
.md-h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 96px;
  line-height: 112px;
  letter-spacing: -1.5px;
}

/* Headline 2 */
.md-h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.5px;
}

/* Headline 3 */
.md-h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
}

/* Headline 4 */
.md-h4 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.25px;
}

/* Headline 5 */
.md-h5 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
}

/* Headline 6 — App Bar 标题、卡片标题 */
.md-h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

/* Subtitle 1 — 列表主文字 */
.md-subtitle1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

/* Subtitle 2 — 列表次要文字 */
.md-subtitle2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.10px;
}

/* Body 1 — 主正文 */
.md-body1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.50px;
}

/* Body 2 — 次要正文/描述 */
.md-body2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}

/* Button — 按钮、Tab文字 */
.md-button {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}

/* Caption — 图片说明、时间戳 */
.md-caption {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.40px;
}

/* Overline — 分类标签 */
.md-overline {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.50px;
  text-transform: uppercase;
}
```

---

## 四、字体应用指引

### 4.1 各场景对应字体样式

| 场景 | 推荐样式 |
| ---- | -------- |
| App Bar 标题 | **Headline 6** |
| 页面主标题 | **Headline 4** 或 **Headline 5** |
| 卡片标题 | **Headline 6** |
| 对话框标题 | **Headline 6** |
| 列表主文字 | **Subtitle 1** |
| 列表辅助文字 | **Body 2** |
| 正文段落 | **Body 1** |
| 按钮、Tab | **Button**（全大写，letter-spacing: 1.25px）|
| 图片描述 | **Caption** |
| 标签/分类 | **Overline**（全大写）|
| 数字展示卡片 | **Headline 3** 或 **Headline 4** |
| 辅助/次要信息 | **Body 2** 或 **Caption** |

### 4.2 字体可读性规则

- **推荐每行文字 40-60 字符**（中文约 20-30 字）以保证可读性
- `line-height` 保持在字号的 **1.4–1.6 倍**（已在规范表中体现）
- 较长内容使用 **Body 1**（字号 16px）而非 **Body 2**（14px）

### 4.3 可替换字体

从 [fonts.google.com](https://fonts.google.com) 选择字体时：
- **标题**（H1-H4）：可选展示性强的字体，如 Playfair Display、Merriweather
- **副标题/正文**（H5-Body）：推荐可读性强的 Sans-serif，如 Inter、Open Sans、Noto Sans
- **按钮/标签**：保持清晰、简洁的无衬线字体

---

## 五、Typography Figma Token 对照

在 Figma 中，以下 Text Styles 已预定义（格式：`样式名 / 属性`）：

```
Roboto/Headline 1     → Light 300 / 96px / 112lh / -1.5ls
Roboto/Headline 2     → Light 300 / 60px / 72lh  / -0.5ls
Roboto/Headline 3     → Regular 400 / 48px / 56lh  / 0ls
Roboto/Headline 4     → Regular 400 / 34px / 40lh  / 0.25ls
Roboto/Headline 5     → Regular 400 / 24px / 32lh  / 0ls
Roboto/Headline 6     → Medium 500 / 20px / 24lh  / 0.15ls
Roboto/Subtitle 1     → Regular 400 / 16px / 24lh  / 0.15ls
Roboto/Subtitle 2     → Medium 500 / 14px / 24lh  / 0.10ls
Roboto/Body 1         → Regular 400 / 16px / 24lh  / 0.50ls
Roboto/Body 2         → Regular 400 / 14px / 20lh  / 0.25ls
Roboto/Button         → Medium 500 / 14px / 16lh  / 1.25ls (uppercase)
Roboto/Caption        → Regular 400 / 12px / 16lh  / 0.40ls
Roboto/Overline       → Regular 400 / 10px / 16lh  / 1.50ls (uppercase)
```
