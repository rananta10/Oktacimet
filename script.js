const music = document.getElementById('music');
const playBtn = document.getElementById('playMusic');

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸️ Pause Music";
  } else {
    music.pause();
    playBtn.textContent = "🎵 Play Music";
  }
});
