let speaking = false; // pour pas recommencer un dialogue en r'appuyant sur espace

function dialogue1() {
    speaking = true
    document.getElementById("dialogue").textContent = "Bonjour !";

    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");
    const reponse3 = document.getElementById("reponse3");

    reponse1.textContent = "Bonjour!";
    reponse2.textContent = "comment va tu";
    reponse3.textContent = "Excuse moi je voulais pas te deranger";

    reponse1.style.cursor = "pointer";
    reponse2.style.cursor = "pointer";
    reponse3.style.cursor = "pointer";

    //quand une réponse est cliqué
    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Salut!";
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "Bien et toi";
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bye!";
        speaking = false // fin de dialogue
    };
}