---
title: "お問い合わせ"
---

<form name="contacto" method="POST" netlify action="/ja/thank-you">
  <input type="hidden" name="form-name" value="contacto">

  <label for="name">お名前</label>
  <input type="text" id="name" name="name" required>

  <label for="email">メールアドレス</label>
  <input type="email" id="email" name="email" required>

  <label for="message">メッセージ</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">送信</button>
</form>
