let end = false

function dialogue1() {
    speaking = true;
    document.getElementById("dialogue").textContent = "Salut ! Tu fais quoi ?";

    const reponse1 = document.getElementById("reponse1");
    const reponse2 = document.getElementById("reponse2");
    const reponse3 = document.getElementById("reponse3");

    reponse1.textContent = "Je regarde un peu la tv.";
    reponse2.textContent = "Je pensais justement a toi.";
    reponse3.textContent = "Je vais devoir partir.";

    reponse1.onclick = () => dialogue2();
    reponse2.onclick = () => dialogue2();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah dommage ! On se verra une autre fois.";
        base();
    };
}

function dialogue2() {
    document.getElementById("dialogue").textContent = "Tu as quelque chose a boire ?";

    reponse1.textContent = "Oui, tu veux de l'eau ?";
    reponse2.textContent = "Je peux te proposer un jus de fruit.";
    reponse3.textContent = "Non, mais tu peux rentrer chez toi si tu veux.";

    reponse1.onclick = () => dialogue3();
    reponse2.onclick = () => dialogue3();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bon, je vais y aller alors. Salut !";
        base();
    };
}

function dialogue3() {
    document.getElementById("dialogue").textContent = "Merci ! Alors, quoi de neuf depuis la derniere fois ?";

    reponse1.textContent = "Pas grand chose, et toi ?";
    reponse2.textContent = "J'ai beaucoup pense a toi.";
    reponse3.textContent = "Je prefere rentrer, je suis fatiguee.";

    reponse1.onclick = () => dialogue4();
    reponse2.onclick = () => dialogue4();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme, repose toi bien !";
        base();
    };
}

function dialogue4() {
    document.getElementById("dialogue").textContent = "Tu veux faire quelque chose ce soir ?";

    reponse1.textContent = "On pourrait regarder un film.";
    reponse2.textContent = "On pourrait sortir quelque part.";
    reponse3.textContent = "Je prefere rester tranquille ce soir.";

    reponse1.onclick = () => dialogue5();
    reponse2.onclick = () => dialogue5();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "D'accord, on se fera quelque chose une autre fois !";
        base();
    };
}

function dialogue5() {
    document.getElementById("dialogue").textContent = "Sortir ? Tu pensais aller ou ?";

    reponse1.textContent = "Je connais un bon restaurant en ville.";
    reponse2.textContent = "Je pensais aller prendre un cafe avec toi.";
    reponse3.textContent = "Finalement, je ne suis plus trop motive.";

    reponse1.onclick = () => dialogue6();
    reponse2.onclick = () => dialogue6();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah, tant pis. On fera ca une prochaine fois !";
        base();
    };
}

function dialogue6() {
    document.getElementById("dialogue").textContent = "Un restaurant ? Cest une invitation ?";

    reponse1.textContent = "Oui, j'aimerais bien passer la soiree avec toi.";
    reponse2.textContent = "Exactement, ca te ferait plaisir ?";
    reponse3.textContent = "Non, laisse tomber.";

    reponse1.onclick = () => dialogue7();
    reponse2.onclick = () => dialogue7();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah... Daccord, je vais rentrer alors.";
        base();
    };
}

function dialogue7() {
    document.getElementById("dialogue").textContent = "C'est gentil ! Tu es sur que ca ne te derange pas ?";

    reponse1.textContent = "Pas du tout, ca me fait plaisir.";
    reponse2.textContent = "Au contraire, j'en avais envie depuis longtemps.";
    reponse3.textContent = "En fait, jai change davis.";

    reponse1.onclick = () => dialogue8();
    reponse2.onclick = () => dialogue8();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bon, je comprends. A une prochaine fois !";
        base();
    };
}

function dialogue8() {
    document.getElementById("dialogue").textContent = "Tu es vraiment gentil avec moi. Pourquoi tu m'invites ?";

    reponse1.textContent = "Parce que j'aime bien passer du temps avec toi.";
    reponse2.textContent = "J'ai surtout Besoin d'une excuse pour manger dehors.";
    reponse3.textContent = "Juste pour te faire plaisir.";

    reponse1.onclick = () => dialogue9();
    reponse2.onclick = () => dialogue9();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Cest gentil, mais je crois que je vais rentrer.";
        base();
    };
}

function dialogue9() {
    document.getElementById("dialogue").textContent = "Mouais, t'es sur que tu n'a rien derriere la tete ?";

    reponse1.textContent = "Peut etre un peu, oui.";
    reponse2.textContent = "''Rester silencieux''";
    reponse3.textContent = "Non, pas du tout.";

    reponse1.onclick = () => dialogue10();
    reponse2.onclick = () => dialogue10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah bon ? Bon, je vais rentrer alors.";
        base();
    };
}

function dialogue10() {
    document.getElementById("dialogue").textContent = "Alors, je dois comprendre que cest un rendez-vous ?";

    reponse1.textContent = "Oui, si tu en as envie.";
    reponse2.textContent = "Exactement";
    reponse3.textContent = "Non, oublie ce que j'ai dit.";

    reponse1.onclick = () => dialogue11();
    reponse2.onclick = () => dialogue11();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Daccord, on en reparlera une autre fois.";
        base();
    };
}

function dialogue11() {
    document.getElementById("dialogue").textContent = "Alors, on y va ? Jai hate de passer cette soiree avec toi !";

    reponse1.textContent = "Bien sur, allons au restaurant ! On se retrouve a 19h?";
    reponse2.textContent = "Je vais me preparer, on se retrouve vers 7h et demi?";
    reponse3.textContent = "Je viens de me rapeller que le plombier doit passer";

    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Super ! Allez, en route pour une belle soiree !";
        end = true
        base();
        //fin de niveau
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "Je tattends alors. Prends ton temps !";
        end = true
        base();
        //fin de niveau
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de souci, on remettra ca a une autre fois.";
        end = true
        base();
        //fin de niveau
    };
}
