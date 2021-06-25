// Options the user could type in
const prompts = [
    ["hola", "hey", "holis", "buenos dias", "buenas tardes"],
    ["como estas", "que tal tu vida", "que tal las cosas"],
    ["que estas haciendo", "que haces", "que hay de nuevo"],
    ["cuantos años tienes"],
    ["quien eres", "eres humano", "eres un bot", "eres humano o bot"],
    ["quien es tu creador", "quien te hizo"],
    [
      "tu nombre",
      "nombre",
      "podria saber tu nombre",
      "cual es tu nombre",
      "como te llamas a ti mismo"
    ],
    ["te amo"],
    ["feliz", "bien", "divertido", "maravilloso", "fantastico", "cool"],
    ["mal", "aburrido", "cansado"],
    ["ayudame", "cuentame una historia", "dime un chiste"],
    ["ah", "si", "ok", "okey", "genial"],
    ["bye", "adios", "nos vemos", "hasta luego"],
    ["que deberia comer hoy"],
    ["bro"],
    ["que", "por que", "como", "donde", "cuando"],
    ["no","no estoy seguro","tal vez","no gracias"],
    [""],
    ["jaja","ja","lol","jeje","gracioso","chiste"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hola!", "Hola cara de bola!", "Hey!", "Hey que pasa!","Bienvenido!"],
    [
      "Bien... ¿cómo estás?",
      "Muy bien, ¿cómo estás?",
      "Fantástico, ¿cómo estás?"
    ],
    [
      "No mucho",
      "A punto de dormir",
      "¿Lo adivinas?",
      "En realidad no lo sé."
    ],
    ["Soy infinito"],
    ["Sólo soy un bot", "Soy un bot. ¿Y tú qué eres?"],
    ["El único Dios verdadero, JavaScript"],
    ["No tengo nombre", "No tengo un nombre, aún"],
    ["Yo también te quiero", "Igual yo :)"],
    ["¿Te has sentido mal alguna vez?", "Me alegro de oírlo"],
    ["Por que?", "¿Por qué? No deberías.", "Intenta ver la televisión"],
    ["¿Sobre qué?", "Una vez hubo un principio. Poco después, hubo un medio. El final."],
    ["Dime una historia", "Cuentame un chiste", "Háblame de ti"],
    ["Bye", "Adiós", "Nos vemos luego."],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Buena pregunta."],
    ["Está bien","Lo entiendo","¿De qué quieres hablar?"],
    ["Por favor, di algo :("],
    ["¡Ja, ja!","¡Buena!"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Ok...",
    "Sigue...",
    "Bro...",
    "Inténtalo de nuevo",
    "Estoy escuchando...",
    "Creo que no te entiendo :/"
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Por favor, quédese en casa", "Usa tu cubrebocas", "Por suerte, no tengo COVID", "Son tiempos de incertidumbre"]