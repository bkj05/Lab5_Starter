// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const face = document.querySelector("img");

  function loadVoices() {
    const voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = voice.name;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;

  button.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const voices = speechSynthesis.getVoices();

    utterance.voice = voices[voiceSelect.value];

    speechSynthesis.speak(utterance);
    
    face.src = "assets/images/smiling-open.png";

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };
  });
}