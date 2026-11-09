let speaking = false

function base (){
    reponse1.textContent = null;
    reponse2.textContent = null;
    reponse3.textContent = null;
    speaking = false
    isChangingLevel = false
}

function tolevel1_1() {

    speaking = true;
    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");

    reponse1.textContent = "sortire";
    reponse2.textContent = "rester";
    


    reponse1.onclick = () => window.location.href = canvas.dataset.nextLevel;
    reponse2.onclick = () => {
        document.getElementById("dialogue");
        base();

    };
}

function tolevel1() {

    speaking = true;
    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");

    reponse1.textContent = "entrer";
    reponse2.textContent = "rester";
    


    reponse1.onclick = () => window.location.href = canvas.dataset.leftLevel;
    reponse2.onclick = () => {
        document.getElementById("dialogue");
        base();

    };
}
