let speaking = false;

function dialogue1() {
    speaking = true
    document.getElementById("dialogue").textContent = "Bonjour !";

    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");
    const reponse3 = document.getElementById("reponse3");

    reponse1.textContent = "Bonjour !";
    reponse2.textContent = "Qui t'es qui ?";
    reponse3.textContent = "aurevoir";

    reponse1.style.cursor = "pointer";
    reponse2.style.cursor = "pointer";
    reponse3.style.cursor = "pointer";

    //quand une réponse est cliqué
    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Salut!";
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "Bien?";
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bye!";
    };
}