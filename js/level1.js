const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 1250, y: 850, w: 40, h: 40, speed: 5 };
const sprite = new Image();
sprite.src = '../img/player-sprite.png';

const bg = new Image();
bg.src = '../img/background2.png';

let isChangingLevel = false;

//gestion des hitbox
const hitboxes = {
    table: { x: 225, y: 330, w: 165, h: 195 },
    NPC_n1: { x: 0, y: 300, w: 400, h: 20 }
};

function overlaps(player, object) {
    return player.x < object.x + object.w &&
        player.x + player.w > object.x &&
        player.y < object.y + object.h &&
        player.y + player.h > object.y;
}


window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (['KeyW','KeyA','KeyS','KeyD','Space'].includes(e.code)) {
        e.preventDefault();
    }
});

window.addEventListener('keyup', e => {
    keys[e.code] = false;
});

function update() {
    const table = hitboxes.table;
    const horizontalMovement = (keys['KeyD'] ? player.speed : 0) - (keys['KeyA'] ? player.speed : 0); //pas de snappy tappy pcq c'est nul
    const verticalMovement = (keys['KeyS'] ? player.speed : 0) - (keys['KeyW'] ? player.speed : 0);

   player.x += horizontalMovement;
if (overlaps(player, table)) {
    player.x -= horizontalMovement;
}

player.y += verticalMovement;
if (overlaps(player, table)) {
    player.y -= verticalMovement;
}   

    player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));
    

    if (!isChangingLevel && player.x + player.w == canvas.width) { // a changer pour la pos de la porte
        isChangingLevel = true;
        window.location.href = canvas.dataset.nextLevel;
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // changer les dim pour jeu

    const table = hitboxes.table;
    ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
    ctx.fillRect(table.x, table.y, table.w, table.h);
    ctx.strokeStyle = 'red';
    ctx.strokeRect(table.x, table.y, table.w, table.h);

    ctx.drawImage(sprite, player.x, player.y, player.w, player.h); 

    ctx.fillStyle = 'white';
    ctx.font = '12px monospace';
    ctx.fillText('level 1 - placeHolder description niveau', 10, 20);
}

function loop() {

    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
