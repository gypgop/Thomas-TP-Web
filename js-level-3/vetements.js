let color

function cafe1() {
    speaking = true;
    document.getElementById("dialogue").textContent = "quel vetement je devrais choisir??";

    reponse1.textContent = "blanc";
    reponse2.textContent = "brun";
    reponse3.textContent = "noir";
    reponse4.textContent = "rouge";

    reponse1.onclick = () => {
        color = "blanc"
        base();
    };reponse2.onclick = () => {
        color = "brun"
        base();
    };
    reponse3.onclick = () => {
        color = "noir"
        base();
    };
    reponse4.onclick = () => {
        color = "rouge"
        base();
    };
}



function vetements(direction){
    if (direction == "R") {
        if (color == "blanc"){
            sprite.src = '../img/outfitG/whiteright.png'
        }

        else if (color == "brun"){
            //sprite de couleur
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackright.png'
        }
        else if (color == "rouge"){
            //sprite de couleur
        }
        else {
            sprite.src = '../img/rightSpriteG.png'
        }
    }


    else if (direction == "L") {
        if (color == "blanc"){
            sprite.src = '../img/outfitG/whiteleft.png'
        }

        else if (color == "brun"){
            //sprite de couleur
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackleft.png'
        }
        else if (color == "rouge"){
            //sprite de couleur
        }
        else {
            sprite.src = '../img/leftSpriteG.png'
        }
    }


    else if (direction == "D") {
        if (color == "blanc"){
            sprite.src = '../img/outfitG/whitefront.png'
        }

        else if (color == "brun"){
            //sprite de couleur
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackfront.png'
        }
        else if (color == "rouge"){
            //sprite de couleur
        }
        else {
            sprite.src = '../img/downSpriteG.png'
        }
    }

    
    else if (direction == "U") {
        if (color == "blanc"){
            sprite.src = '../img/outfitG/whiteback.png'
        }

        else if (color == "brun"){
            //sprite de couleur
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackback.png'
        }
        else if (color == "rouge"){
            //sprite de couleur
        }
        else {
            sprite.src = '../img/upSpriteG.png'
        }
    }
}