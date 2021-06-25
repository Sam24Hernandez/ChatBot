document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex elimina los caracteres que no son palabras o espacios
  // Recortar los espacios en blanco al final del texto
  // Eliminar dígitos - no estoy seguro de que sea lo mejor
  // Pero resuelve el problema de introducir algo como 'hi1'

  let text = input
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/[\d]/gi, "")
    .trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) {
    // Buscar la coincidencia exacta en `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/gracias/gi)) {
    product = "De nada!";
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // Si no hay coincidencia, comprueba si el mensaje contiene `coronavirus`.
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // Si todo lo demás falla: alternativa aleatoria
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Actualizar DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Detener el bucle interno cuando el valor de entrada coincida con las indicaciones
        break;
      }
    }
    if (replyFound) {
      // Detener el bucle exterior cuando se encuentra la respuesta en lugar de interar por todo el array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "chat outgoing";
  userDiv.innerHTML = `<div class="details"><p>${input}</p></div>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("p");
  botDiv.id = "bot";
  botImg.src = "/static/img/img.jpg";
  botDiv.className = "chat incoming";
  botText.innerText = "Escribiendo...";
  botDiv.appendChild(botImg);  
  botDiv.appendChild(botText); 
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product);
  }, 2000);
}
