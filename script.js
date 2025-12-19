//your JS code here. If required.
const sounds = [
'sound1.mp3',
'sound2.mp3',
'sound3.mp3',
'sound4.mp3',
'sound5.mp3',
'sound6.mp3',
];


const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;


// Create a button for each sound
sounds.forEach(sound => {
const button = document.createElement('button');
button.className = 'btn';
button.innerText = sound.replace('.mp3', '');


button.addEventListener('click', () => {
if (currentAudio) {
currentAudio.pause();
currentAudio.currentTime = 0;
}


currentAudio = new Audio(`sounds/${sound}`);
currentAudio.play();
});


buttonsContainer.appendChild(button);
});
const stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.innerText = 'Stop';


stopButton.addEventListener('click', () => {
if (currentAudio) {
currentAudio.pause();
currentAudio.currentTime = 0;
}
});


buttonsContainer.appendChild(stopButton);