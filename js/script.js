function iniciarAdivinanza() {
  var respuesta = prompt(
    "¿Qué clase de verduras usamos para nuestras hamburguesas?\nTenés sólo 4 intentos."
  );
  if (respuesta == "orgánicas") {
    return alert("Correcto!\nSabés mucho de nosotros🥰");
  } else {
    respuesta = prompt("Casi, pero no 🤭\nTenés sólo 3 intentos.");
  }
  if (respuesta == "orgánicas") {
    return alert("Correcto!\nSabés mucho de nosotros🥰");
  } else {
    respuesta = prompt(
      "Bueno está bien, te damos una pista:\nLas conseguimos en una feria...\nTenés sólo 2 intentos."
    );
  }
  if (respuesta == "orgánicas") {
    return alert("Correcto!\nSabés mucho de nosotros🥰");
  } else {
    respuesta = prompt(
      "Incorrecto 😢\nUna pista para tu último intento:\nNo contienen agrotóxicos"
    );
  }
  if (respuesta == "orgánicas") {
    return alert("Correcto!\nCon ayuda cualquiera puede 😂");
  } else {
    return alert(
      "Deberías informarte un poco más, la respuesta es:\nOrgánicas!"
    );
  }
}
