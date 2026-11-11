function cafe1() {
    speaking = true;
    document.getElementById("dialogue").textContent = "Bonjour monsieur ! Bienvenue dans notre cafe. Que puis-je vous servir ?";

    reponse1.textContent = "Bonjour ! Je voudrais un cafe, s'il vous plait.";
    reponse2.textContent = "Bonjour ! Vous avez du the ?";
    reponse3.textContent = "Non merci, je vais partir.";

    reponse1.onclick = () => cafe2();
    reponse2.onclick = () => cafe2();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme monsieur ! Bonne journee et a bientot.";
        base();
    };
}

function cafe2() {
    document.getElementById("dialogue").textContent = "Bien sur ! Vous souhaitez autre chose avec votre boisson ?";

    reponse1.textContent = "Oui, un croissant s'il vous plait.";
    reponse2.textContent = "Non merci, seulement ma boisson.";
    reponse3.textContent = "Finalement, je ne vais rien prendre.";

    reponse1.onclick = () => cafe3();
    reponse2.onclick = () => cafe3();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Aucun souci ! Merci de votre visite et bonne journee.";
        base();
    };
}

function cafe3() {
    document.getElementById("dialogue").textContent = "Tres bien ! Vous souhaitez vous installer a une table ou emporter votre commande ?";

    reponse1.textContent = "Je vais m'installer a une table.";
    reponse2.textContent = "Je prefere emporter ma commande.";
    reponse3.textContent = "Je vais finalement changer d'avis. Au revoir !";

    reponse1.onclick = () => cafe4();
    reponse2.onclick = () => cafe4();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme ! Passez une bonne journee.";
        base();
    };
}

function cafe4() {
    document.getElementById("dialogue").textContent = "Parfait ! Voici votre commande. Je vous souhaite une bonne degustation !";

    reponse1.textContent = "Merci beaucoup !";
    reponse2.textContent = "Merci, bonne journee a vous !";
    reponse3.textContent = "Au revoir !";

    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Avec plaisir monsieur ! A bientot dans notre cafe.";
        base();
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "Merci monsieur ! A bientot.";
        base();
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Au revoir monsieur !";
        base();
    };
}