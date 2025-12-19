//your JS code here. If required.
const sounds = {
sound1: new Audio('sounds/sound1.mp3'),
sound2: new Audio('sounds/sound2.mp3'),
sound3: new Audio('sounds/sound3.mp3'),
sound4: new Audio('sounds/sound4.mp3'),
};


const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');


function stopAllSounds() {
for (let key in sounds) {
sounds[key].pause();
sounds[key].currentTime = 0;
}
}


buttons.forEach((button) => {
button.addEventListener('click', () => {
const soundName = button.getAttribute('data-sound');
stopAllSounds();
sounds[soundName].play();
});
});


stopButton.addEventListener('click', stopAllSounds);