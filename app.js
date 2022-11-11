let frameY = 0;
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
    frameY = e.target.value;
});

let bark = new Audio('bark.wav');

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 525;
let frameX = 0;
let gameFrame = 0;
let staggerFrame = 4;
const positionType = ['idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll',
    'bite', 'tired', 'get-hit']

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if (gameFrame % staggerFrame == 0) {
        switch (positionType[frameY]) {
            case 'idle':
                frameX < 6 ? frameX++ : frameX = 0;                
                break;
            case 'jump':
                frameX < 6 ? frameX++ : frameX = 0;                
                break;
            case 'fall':
                frameX < 6 ? frameX++ : frameX = 0;
                break;
            case 'run':
                frameX < 8 ? frameX++ : frameX = 0;
                break;
            case 'dizzy':
                frameX < 10 ? frameX++ : frameX = 0;
                break;
            case 'sit':
                frameX < 4 ? frameX++ : frameX = 0;
                break;
            case 'roll':
                frameX < 6 ? frameX++ : frameX = 0;
                break;
            case 'bite':
                frameX < 6 ? frameX++ : frameX = 0;
                bark.play();
                break;
            case 'tired':
                frameX < 11 ? frameX++ : frameX = 0;
                break;
            case 'get-hit':
                frameX < 3 ? frameX++ : frameX = 0;
                break;
        }
    }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
