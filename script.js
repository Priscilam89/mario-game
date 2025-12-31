const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
 

const backgroundMusic = new Audio ('./images/mario.sound.mp3');
backgroundMusic.loop = true; 
backgroundMusic.volume = 0.5;

const startGame = () => {
backgroundMusic.play().catch(error => {

    console.log('Reprodução de áudio bloqueada.Clique ou pressiome uma tecla');
});

}

const jump = () => {
    mario.classList.add('jump');

    mario.addEventListener('animationend', () => {
        mario.classList.remove('jump');
    }, { once: true });
}

window.onload = startGame;

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition >0  && marioPosition < 93) {
        backgroundMusic.pause();
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

         mario.style.animation = 'none';
         mario.style.bottom = `${marioPosition}px`;

         mario.src = './images/game-over.png';
         mario.style.width = '75px';
         mario.style.marginleft = '50px';

         clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);  
document.addEventListener ('keydown', () => {
    jump(); 

    if (backgroundMusic.paused) {
        backgroundMusic.play ();
    }
}) 