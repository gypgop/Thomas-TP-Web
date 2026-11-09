const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 100, y: 700, w: 100, h: 150, speed: 5 };
const sprite = new Image();
sprite.src = '../img/rightSprite.png';

const bg = new Image();
bg.src = '../img/background_level1.1.png';

let isChangingLevel = false;

const hitboxes = {
    leftExit: { x: 0, y: 600, w: 100, h: 250 },
    rightExit: { x: canvas.width - 100, y: 600, w: 100, h: 250 }
};

function contact(first, second) {
    return first.x < second.x + second.w &&
        first.x + first.w > second.x &&
        first.y < second.y + second.h &&
        first.y + first.h > second.y;
}

window.addEventListener('keydown', event => {
    keys[event.code] = true;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(event.code)) {
        event.preventDefault();
    }
});

window.addEventListener('keyup', event => {
    keys[event.code] = false;
});

function update() {
    const horizontalMovement = (keys.KeyD ? player.speed : 0) - (keys.KeyA ? player.speed : 0);
    const verticalMovement = (keys.KeyS ? player.speed : 0) - (keys.KeyW ? player.speed : 0);

    if (horizontalMovement > 0) {
        sprite.src = '../img/rightSprite.png';
    } else if (horizontalMovement < 0) {
        sprite.src = '../img/leftSprite.png';
    } else if (verticalMovement > 0) {
        sprite.src = '../img/downSprite.png';
    } else if (verticalMovement < 0) {
        sprite.src = '../img/upSprite.png';
    }

    player.x = Math.max(0, Math.min(canvas.width - player.w, player.x + horizontalMovement));
    player.y = Math.max(0, Math.min(canvas.height - player.h, player.y + verticalMovement));

    if (keys.Space && !isChangingLevel) {
        if (contact(player, hitboxes.leftExit)) {
            isChangingLevel = true;
            tolevel1();
        } else if (contact(player, hitboxes.rightExit)) {
            isChangingLevel = true;
            window.location.href = canvas.dataset.rightLevel;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(sprite, player.x, player.y, player.w, player.h);

    if (end == true){
        ctx.fillStyle = 'white';
    ctx.font = '44px monospace';
    ctx.fillText('Objectif : Reserver le resto', 20, 30);
    }else{
    ctx.fillStyle = 'white';
    ctx.font = '22px monospace';
    ctx.fillText('controls: Z-Q-S-D-Space', 10, 20);
    }
}
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
