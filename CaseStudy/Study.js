const BALL_SPD = 0.5;
const BALL_SPIN = 0.2;
const HEIGHT = 550;

const PADDLE_SPD = 0.7;
const WIDTH = HEIGHT * 0.9;
const WALL = WIDTH / 50;
const BALL_SIZE = WALL;
const PADDLE_H = WALL;
const PADDLE_W = PADDLE_H * 5;

const COLOR_BACKGROUND = "black";
const COLOR_BALL = "white";
const COLOR_PADDLE = "white";
const COLOR_WALL = "grey";

let score = 0;

const Direction = {
    LEFT: 0,
    RIGHT: 1,
    STOP: 2
};

let canv = document.createElement("canvas");
canv.width = WIDTH;
canv.height = HEIGHT;
document.body.appendChild(canv);

// set up the context
let ctx = canv.getContext("2d");
ctx.lineWidth = WALL;

let ball, paddle;

newGame();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

let timeDelta, timeLast;
requestAnimationFrame(loop);

function loop(timeNow) {
    if (!timeLast) {
        timeLast = timeNow;
    }

    timeDelta = (timeNow - timeLast) * 0.001; // seconds
    timeLast = timeNow;

    updatePaddle(timeDelta);
    updateBall(timeDelta);

    drawBackground();
    drawWalls();
    drawPaddle();
    drawBall();

    requestAnimationFrame(loop);
}

function applyBallSpeed(angle) {

    if (angle < Math.PI / 6) {
        angle = Math.PI / 6;
    } else if (angle > Math.PI * 5 / 6) {
        angle = Math.PI * 5 / 6;
    }

    ball.xv = ball.spd * Math.cos(angle);
    ball.yv = -ball.spd * Math.sin(angle);
}

function drawBackground() {
    ctx.fillStyle = COLOR_BACKGROUND;
    ctx.fillRect(0, 0, canv.width, canv.height);
}

function drawBall() {
    ctx.fillStyle = COLOR_BALL;
    ctx.fillRect(ball.x - ball.w * 0.5, ball.y - ball.h * 0.5, ball.w, ball.h);
}

function drawPaddle() {
    ctx.fillStyle = COLOR_PADDLE;
    ctx.fillRect(paddle.x - paddle.w * 0.5, paddle.y - paddle.h * 0.5, paddle.w, paddle.h);
}

function drawWalls() {
    let wall = WALL * 0.5;
    ctx.strokeStyle = COLOR_WALL;
    ctx.beginPath();
    ctx.moveTo(wall, HEIGHT);
    ctx.lineTo(wall, wall);
    ctx.lineTo(WIDTH - wall, wall);
    ctx.lineTo(WIDTH - wall, HEIGHT);
    ctx.stroke();
}

function keyDown(ev) {
    switch (ev.keyCode) {
        case 32:
            serve();
            break;
        case 37:
            movePaddle(Direction.LEFT);
            break;
        case 39:
            movePaddle(Direction.RIGHT);
            break;
    }
}

function keyUp(ev) {
    switch (ev.keyCode) {
        case 37:
        case 39:
            movePaddle(Direction.STOP);
            break;
    }
}

function movePaddle(direction) {
    switch (direction) {
        case Direction.LEFT:
            paddle.xv = -paddle.spd;
            break;
        case Direction.RIGHT:
            paddle.xv = paddle.spd;
            break;
        case Direction.STOP:
            paddle.xv = 0;
            break;
    }
}

function newGame() {
    paddle = new Paddle();
    ball = new Ball();
}

function outOfBounds() {
    newGame();
}

function serve() {

    if (ball.yv !== 0) {
        return;
    }

    let angle = Math.random() * Math.PI / 2 + Math.PI / 4;
    applyBallSpeed(angle);
}

function updateBall(delta) {
    ball.x += ball.xv * delta;
    ball.y += ball.yv * delta;

    if (ball.x < WALL + ball.w * 0.5) {
        ball.x = WALL + ball.w * 0.5;
        ball.xv = -ball.xv;
        score +=1;
    } else if (ball.x > canv.width - WALL - ball.w * 0.5) {
        ball.x = canv.width - WALL - ball.w * 0.5;
        ball.xv = -ball.xv;
        score +=1;
    } else if (ball.y < WALL + ball.h * 0.5) {
        ball.y = WALL + ball.h * 0.5;
        ball.yv = -ball.yv;
        score +=1;
    }

    if (ball.y > paddle.y - paddle.h * 0.5 - ball.h * 0.5
        && ball.y < paddle.y
        && ball.x > paddle.x - paddle.w * 0.5 - ball.w * 0.5
        && ball.x < paddle.x + paddle.w * 0.5 + ball.w * 0.5
    ) {
        ball.y = paddle.y - paddle.h * 0.5 - ball.h * 0.5;
        ball.yv = -ball.yv;

        let angle = Math.atan2(-ball.yv, ball.xv);
        angle += (Math.random() * Math.PI / 2 - Math.PI / 4) * BALL_SPIN;
        applyBallSpeed(angle);
    }

    if (ball.y > canv.height) {
        outOfBounds();
        console.log("score = "+score);
        console.log("Gameover");
    }

    if (ball.yv === 0) {
        ball.x = paddle.x;
    }
}

function updatePaddle(delta) {
    paddle.x += paddle.xv * delta;

    if (paddle.x < WALL + paddle.w * 0.5) {
        paddle.x = WALL + paddle.w * 0.5;
    } else if (paddle.x > canv.width - WALL - paddle.w * 0.5) {
        paddle.x = canv.width - WALL - paddle.w * 0.5;
    }
}

function Ball() {
    this.w = BALL_SIZE;
    this.h = BALL_SIZE;
    this.x = paddle.x;
    this.y = paddle.y - paddle.h / 2 - this.h / 2;
    this.spd = BALL_SPD * WIDTH;
    this.xv = 0;
    this.yv = 0;
}

function Paddle() {
    this.w = PADDLE_W;
    this.h = PADDLE_H;
    this.x = canv.width / 2;
    this.y = canv.height - this.h * 3;
    this.spd = PADDLE_SPD * WIDTH;
    this.xv = 0;
}
