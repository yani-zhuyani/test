# styleguide-gh-pages 启动指南

## 项目概述
Google 代码风格指南静态网站，包含多种语言的编程规范 HTML/Markdown 文件，无需构建工具，通过静态 HTTP 服务器即可预览。

## . - styleguide-gh-pages

### 快速启动

```bash
cd /Users/zhuyani/Downloads/styleguide-gh-pages
python3 -m http.server 8099 &
```

**启动后访问**：http://localhost:8099/test-plan-form.html

```yaml
subProjectPath: .
command: python3 -m http.server 8099 &
cwd: .
port: 8099
previewUrl: http://localhost:8099
description: 静态 HTML 文件集合，通过 Python HTTP 服务器提供预览
```
