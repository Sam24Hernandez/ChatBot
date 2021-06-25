// Texto a Pronunciar

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "es-MEX";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1; // Pueden ser de 0, 1, o 2
  synth.speak(voice);
}