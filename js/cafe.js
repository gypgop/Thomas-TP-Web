function cafe1() {
    speaking = true;
    document.getElementById("dialogue").textContent = "Bonjour monsieur ! Bienvenue dans notre cafe. Vous cherchez une place ?";

    reponse1.textContent = "Bonjour ! Oui, je voudrais m'installer quelque part.";
    reponse2.textContent = "Bonjour ! Je voudrais prendre un cafe.";
    reponse3.textContent = "Finalement, je vais aller ailleurs.";

    reponse1.onclick = () => cafe2();
    reponse2.onclick = () => cafe2();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme monsieur ! Bonne journee et peut-etre a une prochaine fois.";
        base();
    };
}

function cafe2() {
    document.getElementById("dialogue").textContent = "Bien sur ! Vous etes seul aujourd'hui ?";

    reponse1.textContent = "Oui, je suis tout seul.";
    reponse2.textContent = "Oui, je voudrais profiter d'un moment tranquille.";
    reponse3.textContent = "Je vais finalement repartir.";

    reponse1.onclick = () => cafe3();
    reponse2.onclick = () => cafe3();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Je comprends monsieur. Passez une bonne journee et au revoir !";
        base();
    };
}

function cafe3() {
    document.getElementById("dialogue").textContent = "Tres bien ! Vous preferez vous installer en terrasse ou a l'interieur ?";

    reponse1.textContent = "Je prefere rester a l'interieur.";
    reponse2.textContent = "La terrasse me semble agreable.";
    reponse3.textContent = "Je pense que je vais partir.";

    reponse1.onclick = () => cafe4();
    reponse2.onclick = () => cafe4();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Aucun probleme monsieur ! Bonne fin de journee a vous.";
        base();
    };
}

function cafe4() {
    document.getElementById("dialogue").textContent = "Parfait ! Installez-vous ou vous le souhaitez. Nous sommes assez calmes cet apres-midi. Que souhaitez-vous commander ?";

    reponse1.textContent = "Un cafe noir, s'il vous plait.";
    reponse2.textContent = "Un cafe au lait, merci.";
    reponse3.textContent = "Je vais finalement changer d'endroit.";

    reponse1.onclick = () => cafe5();
    reponse2.onclick = () => cafe5();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Tres bien monsieur ! Merci de votre passage. Au revoir !";
        base();
    };
}

function cafe5() {
    document.getElementById("dialogue").textContent = "Tres bon choix ! Souhaitez-vous quelque chose pour accompagner votre cafe ? Nous avons des croissants et des petits gateaux.";

    reponse1.textContent = "Un croissant, s'il vous plait.";
    reponse2.textContent = "Non merci, seulement le cafe.";
    reponse3.textContent = "Je ne vais rien prendre finalement. Au revoir !";

    reponse1.onclick = () => cafe6();
    reponse2.onclick = () => cafe6();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de souci monsieur ! Passez une bonne journee.";
        base();
    };
}

function cafe6() {
    document.getElementById("dialogue").textContent = "Tres bien ! Je vous apporte cela tout de suite. Vous avez prevu quelque chose pour votre soiree ?";

    reponse1.textContent = "Je dois retrouver des amis ce soir.";
    reponse2.textContent = "Je n'ai rien de special de prevu.";
    reponse3.textContent = "Je prefere ne pas discuter, merci.";

    reponse1.onclick = () => cafe7();
    reponse2.onclick = () => cafe7();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bien sur monsieur, je vous laisse profiter de votre moment tranquille.";
        base();
    };
}

function cafe7() {
    document.getElementById("dialogue").textContent = "Je vois ! Vous avez encore un peu de temps devant vous. Vous pouvez rester ici aussi longtemps que vous le souhaitez.";

    reponse1.textContent = "Merci, c'est tres gentil.";
    reponse2.textContent = "C'est parfait, je cherchais justement un endroit calme.";
    reponse3.textContent = "Merci, mais je vais devoir partir.";

    reponse1.onclick = () => cafe8();
    reponse2.onclick = () => cafe8();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Aucun probleme monsieur ! J'espere vous revoir bientot. Au revoir !";
        base();
    };
}

function cafe8() {
    document.getElementById("dialogue").textContent = "Avec plaisir ! Voici votre cafe. Est-ce que vous souhaitez aussi avoir le wifi pour utiliser votre telephone ou votre ordinateur ?";

    reponse1.textContent = "Oui, ce serait tres utile.";
    reponse2.textContent = "Non merci, je vais simplement me reposer.";
    reponse3.textContent = "Non merci, je vais m'en aller.";

    reponse1.onclick = () => cafe9();
    reponse2.onclick = () => cafe9();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Tres bien monsieur ! Bonne soiree et a bientot.";
        base();
    };
}

function cafe9() {
    document.getElementById("dialogue").textContent = "Pas de probleme ! N'hesitez pas a m'appeler si vous avez besoin de quelque chose. Votre cafe est bien chaud.";

    reponse1.textContent = "Merci beaucoup, c'est parfait.";
    reponse2.textContent = "Merci ! Je vais profiter du calme.";
    reponse3.textContent = "Merci, je vais partir maintenant.";

    reponse1.onclick = () => cafe10();
    reponse2.onclick = () => cafe10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Je vous en prie monsieur ! Passez une excellente soiree.";
        base();
    };
}

function cafe10() {
    document.getElementById("dialogue").textContent = "Alors monsieur, avez-vous passe un bon moment dans notre cafe ?";

    reponse1.textContent = "Oui, c'etait tres agreable. Merci !";
    reponse2.textContent = "Oui, j'ai pu me detendre avant ma soiree.";
    reponse3.textContent = "Je vais devoir partir maintenant. Au revoir !";

    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Ravi de l'entendre monsieur ! Merci de votre visite et bonne soiree. Au plaisir de vous revoir !";
        base();
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "C'est un plaisir monsieur ! J'espere vous revoir bientot. Passez une bonne soiree !";
        base();
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Au revoir monsieur ! Merci de votre visite et bonne soiree.";
        base();
    };
}