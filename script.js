//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const audios = document.querySelectorAll('audio');


buttons.forEach(button => {
button.addEventListener('click', () => {
audios.forEach(audio => {
audio.pause();
audio.currentTime = 0;
});


const audioId = button.getAttribute('data-audio');
const audio = document.getElementById(audioId);
audio.play();
});
});
stopButton.addEventListener('click', () => {
audios.forEach(audio => {
audio.pause();
audio.currentTime = 0;
});
});