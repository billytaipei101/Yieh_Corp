---
title: "聯絡我們"
---

<form name="contacto" method="POST" netlify action="/zh/thank-you">
  <input type="hidden" name="form-name" value="contacto">

  <label for="name">姓名</label>
  <input type="text" id="name" name="name" required>

  <label for="email">電子郵件</label>
  <input type="email" id="email" name="email" required>

  <label for="message">訊息</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">送出</button>
</form>
