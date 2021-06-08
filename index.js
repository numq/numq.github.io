var doomerAudio = document.getElementById("doomerAudio");
var bloomerAudio = document.getElementById("bloomerAudio");

function playDoomer() {
  bloomerAudio.pause();
  doomerAudio.play();
}

function playBloomer() {
  bloomerAudio.play();
  doomerAudio.pause();
}
