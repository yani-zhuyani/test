# Data Platform 知识库设计稿预览指南

## 项目概述
纯静态 HTML 项目，包含数据平台的知识库设计稿（knowledge-base.html）。无需构建，直接通过静态文件服务器预览。

## . - 静态文件预览服务

### 快速启动

```bash
cd /Users/zhuyani/Downloads/styleguide-gh-pages
python3 -m http.server 8080
```

**启动后访问**：http://localhost:8080/data-platform/knowledge-base.html

```yaml
subProjectPath: .
command: python3 -m http.server 8080
cwd: .
port: 8080
previewUrl: http://localhost:8080/data-platform/knowledge-base.html
description: 使用 Python 内置 HTTP 服务器预览知识库设计稿
```
