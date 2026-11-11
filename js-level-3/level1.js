const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 1100, y: 560, w: 130, h: 200, speed: 2 };
const sprite = new Image();
vetements("L")


const bg = new Image();
bg.src = '../img/chambreG.png';

let isChangingLevel = false;

//gestion des hitbox
const hitboxes = {
    etagere: { x: 10, y: 240, w: 100, h: 250 },

    armoire: { x: 130, y: 0, w: 290, h: 290 },

    lit: { x: 10, y: 500, w: 270, h: 300 },
    tableDeNuit: { x: 10, y: 900, w: 100, h: 100 },
    bureau: { x: 780, y: 200, w: 340, h: 100 },
    pdf: { x: 1150, y: 870, w: 100, h: 100 },

    murDroite: { x: 1250, y: 0, w: 100, h: 1050 },
    murfond: { x: 0, y: 185, w: 1300, h: 10 },


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
    // console.log(keys)

    const horizontalMovement = (keys['KeyD'] ? player.speed : 0) - (keys['KeyA'] ? player.speed : 0);
    const verticalMovement = (keys['KeyS'] ? player.speed : 0) - (keys['KeyW'] ? player.speed : 0);
    

    if (keys['Space'] 
        && (player.x <= hitboxes.armoire.x + hitboxes.armoire.w + 10)
        && (player.x >= hitboxes.armoire.x - 10)
        && (player.y <= hitboxes.armoire.y + 350)) {
            armoire();

    }

    //direction du sprite joueur
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
    

    if (!isChangingLevel && player.x + player.w > canvas.width - 100 && (player.y <= 620 && player.y >= 400) && (keys['Space']) && (speaking == false)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        tolevel1_1();
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); // zone du jeu

    // ctx.fillStyle = 'rgba(255, 0, 0, 0.25)';
    // ctx.strokeStyle = 'red';
    // for (const object of Object.values(hitboxes)) {
    //     ctx.fillRect(object.x, object.y, object.w, object.h);
    //     ctx.strokeRect(object.x, object.y, object.w, object.h);
    // }

    ctx.drawImage(sprite, player.x, player.y, player.w, player.h); //player sprite


    ctx.fillStyle = 'white';
    ctx.font = '22px monospace';
    ctx.fillText('Obejctif: boire un cafe', 10, 20);

}

function loop() {

    hitbox();
    draw();
    requestAnimationFrame(loop);
}

loop();
