const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 1, y: 750, w: 80, h: 80, speed: 3 };
const sprite = new Image();
sprite.src = '../img/rightSprite.png';

const bg = new Image();
bg.src = '../img/background_level_1.0.png';

let isChangingLevel = false;

//gestion des hitbox
const hitboxes = {
    //hitboxes lvl 2
};

function contact(player, object) {
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

function hitbox() {
    const horizontalMovement = (keys['KeyD'] ? player.speed : 0) - (keys['KeyA'] ? player.speed : 0); //pas de snappy tappy pcq c'est nul
    const verticalMovement = (keys['KeyS'] ? player.speed : 0) - (keys['KeyW'] ? player.speed : 0);

    if (horizontalMovement > 0) {
        sprite.src = '../img/rightSprite.png'
    }
    else if (horizontalMovement < 0) {
        sprite.src = '../img/leftSprite.png'
    }
    else if (verticalMovement > 0) {
        sprite.src = '../img/downSprite.png'
    }
    else if (verticalMovement < 0) {
        sprite.src = '../img/upSprite.png'
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
    

    if (!isChangingLevel && player.x == 0 && (player.y <= 820 && player.y >= 600)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        window.location.href = canvas.dataset.nextLevel;
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // zone du jeu

// affichages hitboxes

    // ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
    // ctx.strokeStyle = 'red';
    // for (const object of Object.values(hitboxes)) {
    //     ctx.fillRect(object.x, object.y, object.w, object.h); 
    //     ctx.strokeRect(object.x, object.y, object.w, object.h);
    // }

    ctx.drawImage(sprite, player.x, player.y, player.w, player.h); 

    ctx.fillStyle = 'white';
    ctx.font = '12px monospace';
    ctx.fillText('level 1 - placeHolder description niveau', 10, 20);
}

function loop() {

    hitbox();
    draw();
    requestAnimationFrame(loop);
}

loop();
