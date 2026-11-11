const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 1200, y: 700, w: 100, h: 150, speed: 4 };
const sprite = new Image();
sprite.src = '../img/leftSprite.png';

const bg = new Image();
bg.src = '../img/background_level1.1.png';

let isChangingLevel = false;

const hitboxes = {
    caillou: { x: 870, y: 250, w: 110, h: 1 },
    fence1: { x: 10, y: 400, w: 500, h: 150  },
    fence2: { x: 930, y: 400, w: 400, h: 150  },

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

    player.x += horizontalMovement;
    if (Object.values(hitboxes).some(object => contact(player, object))) {
        player.x -= horizontalMovement;
    }

    player.y += verticalMovement;
    if (Object.values(hitboxes).some(object => contact(player, object))) {
        player.y -= verticalMovement;
    }

    player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));

    if (!isChangingLevel && player.x + player.w == canvas.width && (player.y <= 820 && player.y >= 600) && (keys['Space']) && (speaking == false)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        tolevel1_x();
    }
    if (!isChangingLevel && player.x == 0 && (player.y <= 820 && player.y >= 600) && (keys['Space']) && (speaking == false)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        tolevel1();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
    // ctx.strokeStyle = 'red';
    // for (const object of Object.values(hitboxes)) {
    //     ctx.fillRect(object.x, object.y, object.w, object.h); 
    //     ctx.strokeRect(object.x, object.y, object.w, object.h);
    // }


    ctx.drawImage(sprite, player.x, player.y, player.w, player.h);

    
    ctx.fillStyle = 'white';
    ctx.font = '22px monospace';
    ctx.fillText('Objectif: prendre un cafe', 10, 20);
    
}
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
