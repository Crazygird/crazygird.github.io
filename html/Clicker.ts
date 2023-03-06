var number = 0;
var pointsPerSecond = 0;
var level = 1;
var status = 0;
var numSinceLastClick = 0;
var pointsPerSecondSave = 0;
var clickPower = 1;
var overclock = 0;
var overclockTime = 0;
var overclockPPS = 0;

var intervalId = window.setInterval(function(){
    Points();
    if (numSinceLastClick >= pointsPerSecond * 1000) {

        pointsPerSecondSave = pointsPerSecond;
        pointsPerSecond = 0;

    }

    if(overclock == 1) {

        overclockTime++;

    }
}, 1000);

var intervalId = window.setInterval(function(){
    document.getElementById("Score").innerHTML = number;
    overclockPPS = pointsPerSecond * 2;
    if (overclock == 0) {

        document.getElementById("pointsPerSecond").innerHTML = "Your points per second is "+pointsPerSecond;

    } else if (overclock == 1) {

        document.getElementById("pointsPerSecond").innerHTML = "Your points per second is "+overclockPPS;

    }
    document.getElementById("Level").innerHTML = "Your level is " + level;
    document.getElementById("ClickPower").innerHTML = "Your click power is " + clickPower;
    pointsPerSecondSave = pointsPerSecond;
    if(status == 0 ) {

        document.getElementById("status").innerHTML = "You have not won yet"

    }else{

        document.getElementById("status").innerHTML = "You win"

    }
    if (overclockTime >= 100) {

        overclock = 0;
        overclockTime = 0;

    }
    if (overclock == 0) {

        document.getElementById("Overclock").innerHTML = "Overclock is off"

    } else if (overclock == 1) {

        document.getElementById("Overclock").innerHTML = "Overclock is on"

    }
}, 10);

function ClickMe() {

    numSinceLastClick = 0;
    number+=clickPower;
    pointsPerSecond = pointsPerSecondSave

}

function BuyPerSecond(x, y) {

    if (number >= x*3) {

        if (level >= y) {

            pointsPerSecond+=x;
            number-= x*3

        }

    }

}

function Points() {

    if (overclock == 0) {

        number += pointsPerSecond;
        numSinceLastClick += pointsPerSecond;

    } else if (overclock == 1) {

        number += overclockPPS;
        numSinceLastClick += overclockPPS;

    }

}

function BuyLevel(x, y) {

    if (number >= x) {

        level = y;

    }

}

function Complete(x) {

    if(number>=x) {

        status = 1

    }


}

function BuyClickPower(x, y) {

    if (number >= x*2) {

        if (level >= y) {

            clickPower+=x;
            number-=x*2;

        }

    }

}

function Overclock() {

    if (number >= pointsPerSecond * 100) {

        if (overclock == 0) {

            number -= pointsPerSecond * 100;
            overclock = 1;

        }

    }

}