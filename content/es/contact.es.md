---
title: "Contacto"
---

<form name="contacto" method="POST" netlify action="/es/thank-you/">
  <input type="hidden" name="form-name" value="contacto">

  <label for="name">Nombre</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Correo Electrónico</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Mensaje</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Enviar</button>
</form>