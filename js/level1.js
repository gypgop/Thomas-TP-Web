const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};
const player = { x: 1200, y: 360, w: 40, h: 40, speed: 5 };
const bg = new Image();
bg.src = '../img/background2.png';
const sprite = new Image();
sprite.src = '../img/player-sprite.png';
let isChangingLevel = false;


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
    if (keys['KeyW']) 
        {player.y -= player.speed;}
    if (keys['KeyS']) 
        {player.y += player.speed;}
    if (keys['KeyA']) 
        {player.x -= player.speed;}
    if (keys['KeyD']) 
        {player.x += player.speed;}

    player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));

    if (!isChangingLevel && player.x + player.w == canvas.width) {
        isChangingLevel = true;
        export var playerX = player.x; 
        window.location.href = canvas.dataset.nextLevel;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // changer les dim pour jeu

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
