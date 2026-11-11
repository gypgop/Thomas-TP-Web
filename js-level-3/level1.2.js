const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const keys = {};

const NPC2 = new Image();
NPC2.src = '../img/serveurgauche.png';

const player = { x: 100, y: 500, w: 90, h: 134, speed: 1 };
const sprite = new Image();
vetements("R")

const bg = new Image();
if (sessionStorage.getItem("color") == null){   
    bg.src = '../img/resto.png';
} else {
    bg.src = '../img/restordv.png';
}

let isChangingLevel = false;

const hitboxes = {
    NPC_serveur: { x: 200, y: 400, w: 80, h: 80 },
    comptoire: { x: 0, y: 0, w: 1300, h: 360 },
    
    table1: { x: 395, y: 480, w: 240, h: 60 },
    table2: { x: 765, y: 480, w: 240, h: 60 },

    table3: { x: 330, y: 740, w: 400, h: 140 },
    table3_1: { x: 420, y: 690, w: 300, h: 50 },
    table3_2: { x: 780, y: 740, w: 20   , h: 140 },


    table4: { x: 900, y: 700, w: 205, h: 150 },
    

    wallgauche: { x: 0, y: 630, w: 100, h: 300 },
    pdfgauche: { x: 100, y: 920, w: 100, h: 300 },
    wallbasgauche: { x: 150, y: 990, w: 100, h: 300 },
    wallbasdroite: { x: 1070, y: 990, w: 200, h: 300 },
    etageredroite: { x: 1200, y: 690, w: 200, h: 300 },
    pdfdroite: { x: 1200, y: 390, w: 50, h:70 },
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
        && (player.x <= hitboxes.NPC_serveur.x + 120)
        && (player.x >= hitboxes.NPC_serveur.x - 120)
        && ((player.y <= hitboxes.NPC_serveur.y + 120) 
        && (player.y >= hitboxes.NPC_serveur.y - 120))
        && speaking == false) { //parler au npc

            if (sessionStorage.getItem("color") == "noir"
            || sessionStorage.getItem("color") == "blanc"
            || sessionStorage.getItem("color") == "brun" 
            || sessionStorage.getItem("color") == "rouge"){
                arrive();
            }
            else {

                reservation1();
            }
    }

    if (keys['Space'] 
        && (player.x <= hitboxes.table4.x + 160)
        && (player.x >= hitboxes.table4.x - 160)
        && ((player.y <= hitboxes.table4.y + 150) 
        && (player.y >= hitboxes.table4.y - 150))
        && speaking == false) { //parler au npc
        window.location.href = "../index.html";
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

    if (player.x < hitboxes.NPC_serveur.x  && (player.x < hitboxes.NPC_serveur.x - 85 ^ player.x > hitboxes.NPC_serveur.x + 85)){
        NPC2.src = '../img/serveurgauche.png'
    }
    else if (player.x > hitboxes.NPC_serveur.x  && (player.x < hitboxes.NPC_serveur.x - 85 ^ player.x > hitboxes.NPC_serveur.x + 85)){
        NPC2.src = '../img/serveurdroite.png'
    }
    else if (player.y > hitboxes.NPC_serveur.y + 80){
        NPC2.src = '../img/serveurbas.png'
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


    if (!isChangingLevel && player.x == 0 && (player.y <= 700 && player.y >= 350) && (keys['Space']) && (speaking == false)) { // a changer pour la pos de la porte
        isChangingLevel = true;
        tolevel1_1();
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
    ctx.drawImage(NPC2, hitboxes.NPC_serveur.x, hitboxes.NPC_serveur.y-50, hitboxes.NPC_serveur.w, hitboxes.NPC_serveur.h+50);

    //rajouter un bg pour des meilleurs prio de sprite
    
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
