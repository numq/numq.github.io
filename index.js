var doomerAudio = document.getElementById("doomerAudio");
var bloomerAudio = document.getElementById("bloomerAudio");

doomerAudio.volume = 0.5;
doomerAudio.volume = 0.5;

function playDoomer() {
  bloomerAudio.pause();
  doomerAudio.play();
}

function playBloomer() {
  bloomerAudio.play();
  doomerAudio.pause();
}
