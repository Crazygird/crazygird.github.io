var win = 2;
var bird = document.getElementById("bird");
//var h = window.innerHeight;
//var w = window.innerWidth;
//document.getElementById("Main").style.height = "h";
//document.getElementById("Main").style.width = "w";

var intervalId = window.setInterval(function(){

    x = Math.floor(Math.random()*9);
    y = Math.floor(Math.random()*7);

    if (win == 0) {

        switch (x) {

            case 0:
                document.getElementById("bird").style.marginLeft = "10%";
                break;
            case 1:
                document.getElementById("bird").style.marginLeft = "20%";
                break;
            case 2:
                document.getElementById("bird").style.marginLeft = "30%";
                break;
            case 3:
                document.getElementById("bird").style.marginLeft = "40%";
                break;
            case 4:
                document.getElementById("bird").style.marginLeft = "50%";
                break;
            case 5:
                document.getElementById("bird").style.marginLeft = "60%";
                break;
            case 6:
                document.getElementById("bird").style.marginLeft = "70%";
                break;
            case 7:
                document.getElementById("bird").style.marginLeft = "80%";
                break;
            case 8:
                document.getElementById("bird").style.marginLeft = "90%";
                return;
        }
    
        switch (y) {

            case 0:
                document.getElementById("bird").style.marginTop = "20%";
                break;
            case 1:
                document.getElementById("bird").style.marginTop = "30%";
                break;
            case 2:
                document.getElementById("bird").style.marginTop = "40%";
                break;
            case 3:
                document.getElementById("bird").style.marginTop = "50%";
                break;
            case 4:
                document.getElementById("bird").style.marginTop = "60%";
                break;
            case 5:
                document.getElementById("bird").style.marginTop = "70%";
                break;
            case 6:
                document.getElementById("bird").style.marginTop = "80%";
                break;
        }

    }

    if (win == 2) {

        document.getElementById("StartText").style.visibility = "visible";
        document.getElementById("StartButton").style.visibility = "visible";

    }
    else {

        document.getElementById("StartText").style.visibility = "hidden";
        document.getElementById("StartButton").style.visibility = "hidden";

    }

}, 500);

bird.onclick = function() {

    location.reload();

}

function Restart() {

    win = 0;
    document.getElementById("win").style.visibility = "hidden";
    document.getElementById("winButton").style.visibility = "hidden";

}