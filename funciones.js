const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const cover = document.getElementById("cover");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    cover.style.animationPlayState = "running";
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    cover.style.animationPlayState = "paused";
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});