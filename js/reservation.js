
function reservation1() {
    speaking = true;
    document.getElementById("dialogue").textContent = "Bonjour monsieur ! Bienvenue au restaurant. Que puis-je faire pour vous ?";

    reponse1.textContent = "Bonjour ! Je voudrais reserver une table.";
    reponse2.textContent = "Bonjour ! Je voudrais reserver pour ce soir.";
    reponse3.textContent = "Finalement, je vais partir.";

    reponse1.onclick = () => reservation2();
    reponse2.onclick = () => reservation2();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme monsieur ! Bonne fin de journee et peut-etre a bientot.";
        base();
    };
}

function reservation2() {
    document.getElementById("dialogue").textContent = "Bien sur monsieur ! Pour combien de personnes souhaitez-vous reserver ?";

    reponse1.textContent = "Pour deux personnes, mon amie et moi.";
    reponse2.textContent = "Pour moi et une amie.";
    reponse3.textContent = "Je vais finalement reflechir.";

    reponse1.onclick = () => reservation3();
    reponse2.onclick = () => reservation3();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Je comprends monsieur. N'hesitez pas a revenir si vous changez d'avis. Bonne journee !";
        base();
    };
}

function reservation3() {
    document.getElementById("dialogue").textContent = "Tres bien ! Et pour quelle heure souhaitez-vous reserver ?";

    reponse1.textContent = "Pour 19h30, s'il vous plait.";
    reponse2.textContent = "Pour 19h30 exactement.";
    reponse3.textContent = "Je ne sais pas encore, je vais partir.";

    reponse1.onclick = () => reservation4();
    reponse2.onclick = () => reservation4();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de souci monsieur ! Vous pourrez revenir quand vous aurez choisi votre horaire. Bonne journee !";
        base();
    };
}

function reservation4() {
    document.getElementById("dialogue").textContent = "19h30, c'est parfait ! Nous sommes assez tranquilles ce soir. Le restaurant est encore vide pour le moment.";

    reponse1.textContent = "Ah oui, il n'y a personne pour le moment !";
    reponse2.textContent = "Vous pensez qu'il y aura du monde ce soir ?";
    reponse3.textContent = "Merci pour le renseignement, je vais partir.";

    reponse1.onclick = () => reservation5();
    reponse2.onclick = () => reservation5();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Avec plaisir monsieur ! Passez une bonne fin de journee et peut-etre a ce soir.";
        base();
    };
}

function reservation5() {
    document.getElementById("dialogue").textContent = "Oui, il est seulement 16 heures. Les premiers clients arrivent generalement vers 19 heures.";

    reponse1.textContent = "Je comprends, vous devez etre tranquille pour le moment.";
    reponse2.textContent = "C'est donc le bon moment pour reserver !";
    reponse3.textContent = "Je prefere m'en aller maintenant.";

    reponse1.onclick = () => reservation6();
    reponse2.onclick = () => reservation6();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Tres bien monsieur ! Je vous souhaite une bonne journee. Au revoir !";
        base();
    };
}

function reservation6() {
    document.getElementById("dialogue").textContent = "Exactement ! Avez-vous une preference pour votre table ? Nous avons plusieurs places disponibles.";

    reponse1.textContent = "J'aimerais une table pres de la fenetre.";
    reponse2.textContent = "Une table dans un coin tranquille serait bien.";
    reponse3.textContent = "Finalement, je vais reflechir.";

    reponse1.onclick = () => reservation7();
    reponse2.onclick = () => reservation7();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Aucun probleme monsieur ! Vous pourrez revenir pour reserver une table plus tard. Bonne journee !";
        base();
    };
}

function reservation7() {
    document.getElementById("dialogue").textContent = "Tres bien monsieur ! Je peux vous proposer une belle table pour deux personnes pres de la fenetre.";

    reponse1.textContent = "Parfait, cela me convient.";
    reponse2.textContent = "C'est exactement ce que je voulais.";
    reponse3.textContent = "Merci, mais je vais finalement partir.";

    reponse1.onclick = () => reservation8();
    reponse2.onclick = () => reservation8();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Je comprends monsieur. Bonne journee et peut-etre a une prochaine fois !";
        base();
    };
}

function reservation8() {
    document.getElementById("dialogue").textContent = "Parfait ! Puis-je avoir votre numero de telephone pour enregistrer la reservation ?";

    reponse1.textContent = "Oui, c'est 0607080910.";
    reponse2.textContent = "Bien sur, 0607080910.";
    reponse3.textContent = "Je prefere ne pas reserver finalement.";

    reponse1.onclick = () => reservation9();
    reponse2.onclick = () => reservation9();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme monsieur ! Vous pourrez toujours revenir si vous changez d'avis. Au revoir !";
        base();
    };
}

function reservation9() {
    document.getElementById("dialogue").textContent = "Merci monsieur ! Je note donc une table pour deux personnes a 19h30. La reservation est presque terminee.";

    reponse1.textContent = "Super, merci beaucoup !";
    reponse2.textContent = "Parfait, nous serons la a l'heure.";
    reponse3.textContent = "Attendez, je ne souhaite plus reserver.";

    reponse1.onclick = () => reservation10();
    reponse2.onclick = () => reservation10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Tres bien monsieur, je n'enregistre pas la reservation. Bonne fin de journee !";
        base();
    };
}

function reservation10() {
    document.getElementById("dialogue").textContent = "C'est fait monsieur ! Votre table pour deux personnes est reservee pour 19h30. Nous vous attendrons ce soir !";

    reponse1.textContent = "Merci, bonne journee a vous !";
    reponse2.textContent = "A ce soir, au revoir !";
    reponse3.textContent = "Je dois partir, au revoir !";

    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "A ce soir";
        if (sessionStorage.getItem("end") == "true"){
            window.location.href = "../index.html";
        }
        base();
        
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "A ce soir";
        if (sessionStorage.getItem("end") == "true"){
            window.location.href = "../index.html";
        }
        base();
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "A ce soir";
        if (sessionStorage.getItem("end") == "true"){
            window.location.href = "../index.html";
        }
        base();
    };
}