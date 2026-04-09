---
name: kuaishou-sso-login-snapshot
description: "登录快手内网 SSO，使用 agent-browser 完成认证流程。当用户需要访问快手内部网站（*.corp.kuaishou.com 等）时使用此技能。"
metadata:
  version: 4
---

# 快手内网 SSO 登录

## 使用场景

当需要访问快手内部网站时（如 kstack.corp.kuaishou.com、docs.corp.kuaishou.com 等），需要先通过 SSO 登录认证。

---

## 登录方式优先级

1. **验证码登录（SMS）** ⭐ 优先推荐
   - 更便捷，无需扫码
   - 需要用户手机号
   
2. **扫码登录（KIM Code）** 备选方案
   - 无需手机号
   - 需要用户手动扫码

---

## 登录流程

### 前置步骤：安装 agent-browser（首次使用）

```bash
npm install -g agent-browser
```

### 方式一：验证码登录（优先）

```bash
# 1. 打开目标页面，会自动跳转到 SSO 登录页面
agent-browser open <目标URL>

# 2. 切换到 SMS（验证码登录）选项卡
agent-browser find text "SMS" click

# 3. 检查是否有已记忆的手机号
#    - 有：直接填入
#    - 无：向用户索要手机号并回填输入框

# 4. 点击发送验证码按钮
agent-browser find text "send code" click

# 5. 告知用户验证码已发送，等待用户提供验证码

# 6. 填入验证码
agent-browser find selector "input[placeholder='Verification Code']" type <验证码>

# 7. 点击登录按钮
agent-browser find text "Login" click

# 8. 等待页面加载
agent-browser wait --load networkidle

# 9. 检查登录结果
agent-browser get url
```

**登录成功：** 记忆用户手机号，URL 变为目标页面  
**登录失败：** 检查错误提示，可重试或切换扫码方式

---

### 方式二：扫码登录（备选）

当用户没有手机号、验证码登录失败或用户主动选择时使用。

```bash
# 1. 打开目标页面
agent-browser open <目标URL>

# 2. 切换到 KIM Code 选项卡（或保持默认扫码页）
agent-browser find text "Password" click

# 3. 截图二维码并上传图片链接发送给用户
agent-browser screenshot --selector "canvas" --output /tmp/qrcode.png

# 4. 提示用户立即扫码

# 5. 等待页面加载（扫码后会自动跳转）
agent-browser wait --load networkidle

# 6. 检查登录结果
agent-browser get url
```

---

## 完整示例

### 场景1：首次访问（无记忆手机号）

**用户：** 请访问 https://docs.corp.kuaishou.com/xxx

**AI：** 需要登录 SSO，推荐使用验证码方式。
请提供你的手机号，我帮你发送验证码：

**用户：** 13800138000

**AI：** 好的，验证码已发送！请提供收到的验证码：

**用户：** 123456

**AI：** 搞定！✅ 登录成功！
已记录手机号 13800138000，下次登录更便捷。

---

### 场景2：再次访问（有记忆手机号）

**用户：** 请访问 https://kstack.corp.kuaishou.com/xxx

**AI：** 检测到已有手机号 13800138000，使用验证码登录。
验证码已发送，请提供：

**用户：** 654321

**AI：** 搞定！✅ 登录成功！

---

### 场景3：用户选择扫码登录

**用户：** 我不想用手机号，扫码吧

**AI：** 好的，请扫码登录：
[二维码图片]
扫码后会自动跳转。

**用户：** 扫完了

**AI：** 搞定！✅ 登录成功！

---

## 异常情况处理

| 异常场景 | 处理方式 |
|----------|----------|
| 验证码错误 | 提示用户重新输入，或尝试重新发送 |
| 验证码过期 | 点击重新发送，等待新验证码 |
| 手机号格式错误 | 提示用户检查手机号 |
| 验证码登录失败多次 | 建议切换到扫码登录 |
| 用户无手机号 | 直接切换到扫码登录 |

---

## 注意事项

- 使用 1920*1080 分辨率打开浏览器
- 验证码有效期通常为 60 秒，需及时输入
- 记忆的手机号仅用于当前会话，长期记忆请写入 MEMORY.md
- 二维码有时效性，截图后需立即提示用户扫码
