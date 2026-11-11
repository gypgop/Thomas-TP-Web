let color

// sessionStorage.getItem("color") = null

function base4 (){
    reponse1.textContent = null;
    reponse2.textContent = null;
    reponse3.textContent = null;
    reponse4.textContent = null;
    speaking = false
    isChangingLevel = false
}

function armoire() {
    speaking = true;
    document.getElementById("dialogue").textContent = "quel vetement je devrais choisir??";

    reponse1.textContent = "blanc";
    reponse2.textContent = "brun";
    reponse3.textContent = "noir";
    reponse4.textContent = "rouge";

    reponse1.onclick = () => {
        sessionStorage.setItem("color", "blanc")
        base4();
        sprite.src = '../img/outfitG/whiteback.png'
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse2.onclick = () => {
        sessionStorage.setItem("color", "brun")
        base4();
        sprite.src = '../img/outfitG/brownback.png'
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse3.onclick = () => {
        sessionStorage.setItem("color", "noir")
        base4();
        sprite.src = '../img/outfitG/blackback.png'
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    reponse4.onclick = () => {
        sessionStorage.setItem("color", "rouge")
        base4();
        sprite.src = '../img/outfitG/redback.png'
        document.getElementById("dialogue").textContent = "Je pense que ca va lui plaire";
    };
    

}



function vetements(direction){
    if (direction == "R") {
        if (sessionStorage.getItem("color") == "blanc"){
            sprite.src = '../img/outfitG/whiteright.png'
        }

        else if (sessionStorage.getItem("color") == "brun"){
            sprite.src = '../img/outfitG/brownright.png'
        }
        else if (sessionStorage.getItem("color") == "noir"){
            sprite.src = '../img/outfitG/blackright.png'
        }
        else if (sessionStorage.getItem("color") == "rouge"){
            sprite.src = '../img/outfitG/redright.png'
        }
        else {
            sprite.src = '../img/rightSpriteG.png'
        }
    }


    else if (direction == "L") {
        if (sessionStorage.getItem("color") == "blanc"){
            sprite.src = '../img/outfitG/whiteleft.png'
        }

        else if (sessionStorage.getItem("color") == "brun"){
            sprite.src = '../img/outfitG/brownleft.png'
        }
        else if (sessionStorage.getItem("color") == "noir"){
            sprite.src = '../img/outfitG/blackleft.png'
        }
        else if (sessionStorage.getItem("color") == "rouge"){
            sprite.src = '../img/outfitG/redleft.png'
        }
        else {
            sprite.src = '../img/leftSpriteG.png'
        }
    }


    else if (direction == "D") {
        if (sessionStorage.getItem("color") == "blanc"){
            sprite.src = '../img/outfitG/whitefront.png'
        }

        else if (sessionStorage.getItem("color") == "brun"){
            sprite.src = '../img/outfitG/brownfront.png'
        }
        else if (sessionStorage.getItem("color") == "noir"){
            sprite.src = '../img/outfitG/blackfront.png'
        }
        else if (sessionStorage.getItem("color") == "rouge"){
            sprite.src = '../img/outfitG/redfront.png'
        }
        else {
            sprite.src = '../img/downSpriteG.png'
        }
    }


    else if (direction == "U") {
        if (sessionStorage.getItem("color") == "blanc"){
            sprite.src = '../img/outfitG/whiteback.png'
        }

        else if (sessionStorage.getItem("color") == "brun"){
            sprite.src = '../img/outfitG/brownback.png'
        }
        else if (sessionStorage.getItem("color") == "noir"){
            sprite.src = '../img/outfitG/blackback.png'
        }
        else if (sessionStorage.getItem("color") == "rouge"){
            sprite.src = '../img/outfitG/redback.png'
        }
        else {
            sprite.src = '../img/upSpriteG.png'
        }
    }
}