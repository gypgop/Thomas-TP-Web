let end

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
    reponse2.onclick = () => dialogue3();
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

    reponse1.onclick = () => dialogue4();
    reponse2.onclick = () => dialogue3();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Bon, je vais y aller alors. Salut !";
        base();
    };
}

function dialogue3() {
    document.getElementById("dialogue").textContent = "Ah bon ? Pourquoi tu pensais a moi ?";

    reponse1.textContent = "Parce que ca fait longtemps qu'on ne s'est pas vus.";
    reponse2.textContent = "J'avais envie de te proposer quelque chose.";
    reponse3.textContent = "Pour rien, oublie.";

    reponse1.onclick = () => dialogue5();
    reponse2.onclick = () => dialogue6();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "D'accord, comme tu veux. On se reparlera une autre fois.";
        base();
    };
}

function dialogue4() {
    document.getElementById("dialogue").textContent = "Merci ! Tu as l'air un peu preoccupe aujourd'hui. Tout va bien ?";

    reponse1.textContent = "Oui, tout va bien.";
    reponse2.textContent = "Je reflechissais justement a notre soiree.";
    reponse3.textContent = "Je prefere ne pas en parler.";

    reponse1.onclick = () => dialogue5();
    reponse2.onclick = () => dialogue6();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de probleme, je ne vais pas insister. A bientot !";
        base();
    };
}

function dialogue5() {
    document.getElementById("dialogue").textContent = "C'est vrai que ca fait longtemps ! Tu as prevu quelque chose ce soir ?";

    reponse1.textContent = "Non, rien de special.";
    reponse2.textContent = "Je pensais justement sortir un peu.";
    reponse3.textContent = "Oui, j'ai deja quelque chose de prevu.";

    reponse1.onclick = () => dialogue6();
    reponse2.onclick = () => dialogue7();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah dommage ! On trouvera un autre moment pour se voir.";
        base();
    };
}

function dialogue6() {
    document.getElementById("dialogue").textContent = "Tu voulais me proposer quelque chose ? Je t'ecoute !";

    reponse1.textContent = "On pourrait regarder un film.";
    reponse2.textContent = "On pourrait sortir quelque part.";
    reponse3.textContent = "Finalement, ce n'est pas important.";

    reponse1.onclick = () => dialogue8();
    reponse2.onclick = () => dialogue7();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Comme tu veux ! On en reparlera une autre fois.";
        base();
    };
}

function dialogue7() {
    document.getElementById("dialogue").textContent = "Sortir ? Tu pensais aller ou ?";

    reponse1.textContent = "Je connais un bon restaurant en ville.";
    reponse2.textContent = "Je pensais aller diner avec toi.";
    reponse3.textContent = "Je ne sais pas encore, je vais reflechir.";

    reponse1.onclick = () => dialogue9();
    reponse2.onclick = () => dialogue10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de souci ! Tu me diras quand tu auras une idee.";
        base();
    };
}

function dialogue8() {
    document.getElementById("dialogue").textContent = "Un film ? Pourquoi pas ! Mais j'avoue que j'aurais prefere sortir un peu.";

    reponse1.textContent = "Alors on pourrait aller manger un bout au restorant.";
    reponse2.textContent = "On pourrait plutot aller au restaurant.";
    reponse3.textContent = "Dans ce cas, on fera ca une autre fois.";

    reponse1.onclick = () => dialogue9();
    reponse2.onclick = () => dialogue10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "D'accord ! On trouvera une autre occasion.";
        base();
    };
}


function dialogue9() {
    document.getElementById("dialogue").textContent = "Un restaurant ? C'est une invitation ?";

    reponse1.textContent = "Oui, j'aimerais bien passer la soiree avec toi.";
    reponse2.textContent = "Exactement, ca te ferait plaisir ?";
    reponse3.textContent = "Non, laisse tomber.";

    reponse1.onclick = () => dialogue10();
    reponse2.onclick = () => dialogue10();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah... D'accord, je vais rentrer alors.";
        base();
    };
}

function dialogue10() {
    document.getElementById("dialogue").textContent = "C'est gentil ! Mais pourquoi tu m'invites ? Il y a une occasion speciale ?";

    reponse1.textContent = "Non, j'avais simplement envie de te voir.";
    reponse2.textContent = "J'ai quelque chose a te dire.";
    reponse3.textContent = "Je prefere garder la surprise.";

    reponse1.onclick = () => dialogue11();
    reponse2.onclick = () => dialogue12();
    reponse3.onclick = () => dialogue13();
}

function dialogue11() {
    document.getElementById("dialogue").textContent = "C'est mignon ! Tu sais, ca me ferait vraiment plaisir de passer du temps avec toi.";

    reponse1.textContent = "Alors, on y va ce soir ?";
    reponse2.textContent = "J'espere que tu es libre.";
    reponse3.textContent = "Finalement, je ne sais plus trop.";

    reponse1.onclick = () => dialogue14();
    reponse2.onclick = () => dialogue14();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah bon ? On peut toujours remettre ca a une autre fois.";
        base();
    };
}

function dialogue12() {
    document.getElementById("dialogue").textContent = "Tu as quelque chose a me dire ? Tu commences a m'inquieter !";

    reponse1.textContent = "Rien de grave, je voulais juste te voir.";
    reponse2.textContent = "Je prefere t'en parler autour d'un diner.";
    reponse3.textContent = "Oublie, ce n'est pas important.";

    reponse1.onclick = () => dialogue11();
    reponse2.onclick = () => dialogue14();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "D'accord, je ne vais pas insister. A bientot !";
        base();
    };
}

function dialogue13() {
    document.getElementById("dialogue").textContent = "Une surprise ? Maintenant je suis curieuse ! Tu ne veux vraiment rien me dire ?";

    reponse1.textContent = "Tu verras bien ce soir !";
    reponse2.textContent = "C'est simplement une petite attention.";
    reponse3.textContent = "Finalement, je vais tout te dire une autre fois.";

    reponse1.onclick = () => dialogue11();
    reponse2.onclick = () => dialogue11();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Comme tu veux ! On en reparlera plus tard.";
        base();
    };
}

function dialogue14() {
    document.getElementById("dialogue").textContent = "Alors, je dois comprendre que c'est un rendez-vous ?";

    reponse1.textContent = "Oui, si tu en as envie.";
    reponse2.textContent = "Peut-etre bien.";
    reponse3.textContent = "Non, oublie ce que j'ai dit.";

    reponse1.onclick = () => dialogue15();
    reponse2.onclick = () => dialogue15();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "D'accord, on en reparlera une autre fois.";
        base();
    };
}

function dialogue15() {
    document.getElementById("dialogue").textContent = "C'est une bonne idee ! Mais a quelle heure veux-tu qu'on se retrouve ?";

    reponse1.textContent = "Vers 19h, si ca te convient.";
    reponse2.textContent = "Vers 19h30, ce serait parfait.";
    reponse3.textContent = "Je ne sais pas encore, je dois verifier.";

    reponse1.onclick = () => dialogue16();
    reponse2.onclick = () => dialogue17();
    reponse3.onclick = () => dialogue18();
}

function dialogue16() {
    document.getElementById("dialogue").textContent = "19h ? Ca me va tres bien ! Je vais avoir le temps de me preparer tranquillement.";

    reponse1.textContent = "Super ! Alors c'est decide.";
    reponse2.textContent = "Parfait, je viendrai te chercher.";
    reponse3.textContent = "Attends, je viens de penser a quelque chose.";

    reponse1.onclick = () => dialogue19();
    reponse2.onclick = () => dialogue19();
    reponse3.onclick = () => dialogue18();
}

function dialogue17() {
    document.getElementById("dialogue").textContent = "19h30 ? Tres bien ! Ca me laisse un peu plus de temps pour me preparer.";

    reponse1.textContent = "Parfait, on se retrouve la-bas.";
    reponse2.textContent = "Je viendrai te chercher.";
    reponse3.textContent = "Je ne suis plus tres sur de l'heure.";

    reponse1.onclick = () => dialogue19();
    reponse2.onclick = () => dialogue19();
    reponse3.onclick = () => dialogue18();
}

function dialogue18() {
    document.getElementById("dialogue").textContent = "Pas de probleme ! Prends ton temps. Mais j'espere que tu ne vas pas annuler notre soiree !";

    reponse1.textContent = "Non, ne t'inquiete pas, je vais verifier.";
    reponse2.textContent = "Je pense que 19h30 serait parfait.";
    reponse3.textContent = "En fait, je prefere annuler.";

    reponse1.onclick = () => dialogue17();
    reponse2.onclick = () => dialogue17();
    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Ah... C'est dommage, mais je comprends. On remettra ca a une autre fois.";
        base();
    };
}

function dialogue19() {
    document.getElementById("dialogue").textContent = "Alors, on y va ? J'ai hate de passer cette soiree avec toi !";

    reponse1.textContent = "Bien sur, allons au restaurant ! On se retrouve a 19h ?";
    reponse2.textContent = "Je vais me preparer, on se retrouve vers 7h et demi ?";
    reponse3.textContent = "Je viens de me rappeler que le plombier doit passer.";

    reponse1.onclick = () => {
        document.getElementById("dialogue").textContent = "Super ! Allez, en route pour une belle soiree !";
        sessionStorage.setItem("end", "true");
        base();
        // fin de niveau
    };

    reponse2.onclick = () => {
        document.getElementById("dialogue").textContent = "On se retrouve plus tard alors !";
        sessionStorage.setItem("end", "true");
        base();
        // fin de niveau
    };

    reponse3.onclick = () => {
        document.getElementById("dialogue").textContent = "Pas de souci, on remettra ca a une autre fois.";
        sessionStorage.setItem("end", "true");
        base();
        // fin de niveau
    };
}