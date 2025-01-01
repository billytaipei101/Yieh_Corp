---
title: "Liên hệ"
---

<form name="contacto" method="POST" netlify action="/vi/thank-you">
  <input type="hidden" name="form-name" value="contacto">

  <label for="name">Họ và Tên</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Tin nhắn</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Gửi</button>
</form>
