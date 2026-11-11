let color


function base4 (){
    reponse1.textContent = null;
    reponse2.textContent = null;
    reponse3.textContent = null;
    reponse4.textContent = null;
    speaking = false
    isChangingLevel = false
}

function armoire() {
    console.log("bb")
    speaking = true;
    document.getElementById("dialogue").textContent = "quel vetement je devrais choisir??";

    reponse1.textContent = "blanc";
    reponse2.textContent = "brun";
    reponse3.textContent = "noir";
    reponse4.textContent = "rouge";

    reponse1.onclick = () => {
        color = "blanc"
        base4();
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse2.onclick = () => {
        color = "brun"
        base4();
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse3.onclick = () => {
        color = "noir"
        base4();
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse4.onclick = () => {
        color = "rouge"
        base4();
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    

}



function vetements(direction){
    if (direction == "R") {
        if (color == "blanc"){
            sprite.src = '../img/outfitG/whiteright.png'
        }

        else if (color == "brun"){
            sprite.src = '../img/outfitG/brownright.png'
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackright.png'
        }
        else if (color == "rouge"){
            sprite.src = '../img/outfitG/redright.png'
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
            sprite.src = '../img/outfitG/brownleft.png'
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackleft.png'
        }
        else if (color == "rouge"){
            sprite.src = '../img/outfitG/redleft.png'
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
            sprite.src = '../img/outfitG/brownfront.png'
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackfront.png'
        }
        else if (color == "rouge"){
            sprite.src = '../img/outfitG/redfront.png'
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
            sprite.src = '../img/outfitG/brownback.png'
        }
        else if (color == "noir"){
            sprite.src = '../img/outfitG/blackback.png'
        }
        else if (color == "rouge"){
            sprite.src = '../img/outfitG/redback.png'
        }
        else {
            sprite.src = '../img/upSpriteG.png'
        }
    }
}