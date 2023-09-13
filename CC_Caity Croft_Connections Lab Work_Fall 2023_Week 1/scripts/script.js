let isTechnoClicked = false;
let isRockClicked = false;
let isOperaClicked = false;


/*var booleanValue = true;

function someFunction(){
    if(booleanValue){
        return "something";
    }
}*/


document.getElementById("techno_button").addEventListener("click", function () {
    console.log("techno dance")
    document.getElementById("techno_image").style.display = "block"
    isTechnoClicked = true;
    if (isRockClicked) {
        isRockClicked = false
        document.getElementById("rock_image").style.display = "none"

    }

    if (isOperaClicked) {
        isOperaClicked = false
        document.getElementById("opera_image").style.display = "none"

    }
}

);

document.getElementById("rock_button").addEventListener("click", function () {
    console.log("I wanna rock n roll all night")
    document.getElementById("rock_image").style.display = "block"
    isRockClicked = true;
    if (isTechnoClicked) {
        isTechnoClicked = false
        document.getElementById("techno_image").style.display = "none"

    }

    if (isOperaClicked) {
        isOperaClicked = false
        document.getElementById("opera_image").style.display = "none"

    }
}

);


document.getElementById("opera_button").addEventListener("click", function () {
    console.log("happy dance")
    document.getElementById("opera_image").style.display = "block"
    isOperaClicked = true;
    if (isTechnoClicked) {
        isTechnoClicked = false
        document.getElementById("techno_image").style.display = "none"

    }
    if (isRockClicked) {
        isRockClicked = false
        document.getElementById("rock_image").style.display = "none"

    }
}


);




/*Stack Overflow Recommeneded Template
    $("#formButton").click(function () {
    $("#form1").toggle();
    });

    $("#formButton2").click(function () {
    $("#form2").toggle();
}   );*/