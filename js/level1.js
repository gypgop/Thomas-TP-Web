const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const player = { x: 1190, y: 750, w: 100, h: 150, speed: 3 };
const sprite = new Image();
sprite.src = '../img/leftSprite.png';

const NPC1 = new Image();
NPC1.src = '../img/rightSpriteG.png';

const bg = new Image();
bg.src = '../img/background_level_1.0.png';

let isChangingLevel = false;

//gestion des hitbox
const hitboxes = {
    tv: { x: 0, y: 630, w: 100, h: 250 },
    canape: { x: 210, y: 630, w: 160, h: 230 },
    bureau: { x: 1100, y: 0, w: 340, h: 230 },
    cuisine: { x: 630, y: 0, w: 340, h: 140 },
    lit: { x: 30, y: 0, w: 470, h: 175 },
    NPC_n1: { x: 500, y: 450, w: 120, h: 110 }
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
        && (player.x <= hitboxes.NPC_n1.x + 160)
        && (player.x >= hitboxes.NPC_n1.x - 160)
        && ((player.y <= hitboxes.NPC_n1.y + 150) 
        && (player.y >= hitboxes.NPC_n1.y - 150))) { //parler au npc
        dialogue1();
    }

    if (keys['Space']
        && (player.x <= hitboxes.cuisine.x + 360)
        && (player.x >= hitboxes.cuisine.x - 100)
        && (player.y <= hitboxes.cuisine.y + 200)) {
        
            // :)

        if (bg.src.endsWith ('maison_Plaques_allume.png')){
            bg.src = '../img/background_level_1.0.png';
        }
        else if (bg.src.endsWith ('background_level_1.0.png')){
            bg.src = '../img/maison_Plaques_allume.png';
        }
    }

    //direction du sprite joueur
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

    //direction npc
    if (player.x < hitboxes.NPC_n1.x  && (player.x < hitboxes.NPC_n1.x - 85 ^ player.x > hitboxes.NPC_n1.x + 85)){
        NPC1.src = '../img/leftSpriteG.png'
    }
    else if (player.x > hitboxes.NPC_n1.x  && (player.x < hitboxes.NPC_n1.x - 85 ^ player.x > hitboxes.NPC_n1.x + 85)){
        NPC1.src = '../img/rightSpriteG.png'
    }
    else if (player.y > hitboxes.NPC_n1.y - 80){
        NPC1.src = '../img/downSpriteG.png'
    }
    else if (player.y < hitboxes.NPC_n1.y - 80){
        NPC1.src = '../img/upSpriteG.png'
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
    

    if (!isChangingLevel && player.x + player.w == canvas.width && (player.y <= 820 && player.y >= 600) && (keys['Space'])) { // a changer pour la pos de la porte
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

    ctx.drawImage(sprite, player.x, player.y, player.w, player.h); //player sprite
    ctx.drawImage(NPC1, hitboxes.NPC_n1.x, hitboxes.NPC_n1.y-50, hitboxes.NPC_n1.w, hitboxes.NPC_n1.h+50); // npc sprite

    ctx.fillStyle = 'white';
    ctx.font = '22px monospace';
    ctx.fillText('controls: Z-Q-S-D-Space', 10, 20);
}

function loop() {

    hitbox();
    draw();
    requestAnimationFrame(loop);
}

loop();
