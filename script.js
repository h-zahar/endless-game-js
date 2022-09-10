const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 550;

const spriteImage = new Image();
spriteImage.src = "./assets/shadow-dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let frameX = 0;
let frameY = 0;
const staggerFrames = 4;

const animationStates = {
    idle: {
        name: "idle",
        frames: 6
    },
    jump: {
        name: "jump",
        frames: 6
    },
    fall: {
        name: "fall",
        frames: 6
    },
    run: {
        name: "run",
        frames: 8
    },
    dizzy: {
        name: "dizzy",
        frames: 10
    },
    sit: {
        name: "sit",
        frames: 4
    },
    roll: {
        name: "roll",
        frames: 6
    },
    bite: {
        name: "bite",
        frames: 6
    },
    crawl: {
        name: "crawl",
        frames: 11
    },
    hit: {
        name: "hit",
        frames: 3
    },
};
let currAnimationFrame = "idle";

const selectForm = document.getElementById("controls");
selectForm.addEventListener("change", (e) => {
    currAnimationFrame = e.target.value;
});


const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let positionX = Math.floor(gameFrame / staggerFrames) % animationStates[currAnimationFrame]?.frames;
    frameX = positionX * spriteWidth;

    let positionY = Object.keys(animationStates)?.findIndex(d => d === currAnimationFrame);
    frameY = positionY * spriteHeight;

    ctx.drawImage(spriteImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();