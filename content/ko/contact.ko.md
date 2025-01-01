---
title: "연락처"
---

<form name="contact" method="POST" netlify action="/ko/thank-you">
  <input type="hidden" name="form-name" value="contact">

  <label for="name">이름</label>
  <input type="text" id="name" name="name" required>

  <label for="email">이메일</label>
  <input type="email" id="email" name="email" required>

  <label for="message">메시지</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">보내기</button>
</form>
