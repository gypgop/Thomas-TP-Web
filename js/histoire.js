function dialogue1() {

    document.getElementById("dialogue").textContent = "Bonjour !";

    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");
    const reponse3 = document.getElementById("reponse3");

    reponse1.textContent = "Bonjour !";
    reponse2.textContent = "Qui êtes-vous ?";
    reponse3.textContent = "Je dois partir.";

    reponse1.style.cursor = "pointer";
    reponse2.style.cursor = "pointer";
    reponse3.style.cursor = "pointer";

    //quand une réponse est cliqué
    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Enchanté !";
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "Je suis un voyageur.";
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Au revoir !";
    };
}