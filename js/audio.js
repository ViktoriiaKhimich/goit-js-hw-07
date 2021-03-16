// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// audio.play();

const tag = document.createElement("audio")
tag.controls = true;
tag.src = "../audio/M.mp3";

document.body.append(tag);