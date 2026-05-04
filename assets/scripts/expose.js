window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");

  // FIRST image on page (horn image)
  const hornImage = document.querySelector("section img");

  const audio = document.querySelector("audio");

  const volumeSlider = document.getElementById("volume");

  // SECOND image (volume icon)
  const volumeIcon = document.querySelector("#volume-controls img");

  const button = document.querySelector("button");

  // Dropdown
  hornSelect.addEventListener("change", () => {
    const value = hornSelect.value;

    hornImage.src = `assets/images/${value}.svg`;
    audio.src = `assets/audio/${value}.mp3`;
  });

  // Volume
  volumeSlider.addEventListener("input", () => {
    const value = volumeSlider.value;

    audio.volume = value / 100;

    if (value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  const jsConfetti = new JSConfetti();

  // Play button
  button.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}