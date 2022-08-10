const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  buttons = document.getElementById('buttons').appendChild(btn);
});

const stopSounds = () => {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);

    currentSound.pause();
    currentSound.currentTime = 0;
  });
};
