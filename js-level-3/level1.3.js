const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 100, y: 550, w: 100, h: 150, speed: 1 };
const sprite = new Image();
vetements("R")

const bg = new Image();
bg.src = '../img/cafe.png';

let isChangingLevel = false;

const hitboxes = {
    comptoire: { x: 0, y: 0, w: 1050, h: 340 },
    mur1: { x: 1050, y: 0, w: 1050, h: 200 }, // knock knock
    table1: { x: 270, y: 500, w: 240, h: 120 },
    table2: { x: 910, y: 500, w: 240, h: 120 },
    table3: { x: 910, y: 770, w: 240, h: 120 },
    pdf1: { x: 1180, y: 850, w: 120, h: 120 },
    pdf2: { x: 200, y: 860, w: 90, h: 110 },
    etagere: { x: 0, y: 785, w: 160, h: 110 },
    mur2: { x: 0, y: 700, w: 50, h: 110 },
    mur3: { x: 0, y: 330, w: 50, h: 110 },
    NPC_serveur: { x: 460, y: 200, w: 50, h: 110 },

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

        if (keys['Space'] 
        && (player.x <= hitboxes.NPC_serveur.x + 160)
        && (player.x >= hitboxes.NPC_serveur.x - 160)
        && ((player.y <= hitboxes.NPC_serveur.y + 150) 
        && (player.y >= hitboxes.NPC_serveur.y - 150))
        && speaking == false) { //parler au npc
        cafe1();
    }

    const horizontalMovement = (keys.KeyD ? player.speed : 0) - (keys.KeyA ? player.speed : 0);
    const verticalMovement = (keys.KeyS ? player.speed : 0) - (keys.KeyW ? player.speed : 0);


    if (horizontalMovement > 0) {
        vetements("R")
    }
    else if (horizontalMovement < 0) {
        vetements("L")
    }
    else if (verticalMovement > 0) {
        vetements("D")
    }
    else if (verticalMovement < 0) {
        vetements("U")
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


    if (!isChangingLevel && player.x == 0 && (player.y <= 670 && player.y >= 330) && (keys['Space']) && (speaking == false)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        tolevel1_1();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);


    ctx.drawImage(sprite, player.x, player.y, player.w, player.h);

    
    ctx.fillStyle = 'white';
    ctx.font = '22px monospace';
    ctx.fillText('ce preparer et ce rendre au restorant', 10, 20);
    
}
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();
