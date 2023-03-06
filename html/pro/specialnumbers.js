
//https://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.jshttps://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.jshttps://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.jshttps://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.js
//https://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.js
//https://github.com/bluehalooo/math-stuff/blob/main/specialnumbers.js
function prime(x){
    var prime = true;
    // If number is 1, not prime nor composite.
    if (x == 1){
        console.log("This number is 1, which is neither prime nor composite.");
        return(false);
    }
    
    if (x < 1) {
        console.log("This number is not a positive number, so it is not a prime.")
        return(false);
    }
    
    else if (x>1) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                console.log("This number is not prime.");
                prime = false;
                return(false);
                break;
            }
        }
    }
    if (prime == true) {
        console.log("This number is prime.")
        return (true);
    }
    }
    //The following checks if the input will work as p in the equation (2^p)-1 = p, where p is a prime.
    function mersenne(input) {
        if (prime(input)) {
            var willitwork = ((2**input)-1);
            return(prime(willitwork));
        }
        else {
            return(false)
        }
    }
    
    //This checks if the input is a twin prime.
    
    function twinprime(input) {
        if (prime(input)){
            if (prime(input + 2)) {
                return(true);
            }
            else if (prime(input - 2)) {
                    return(true); 
                    
                }
            else {
                return(false);
            }
    
        }
        else{
            return(false)
        }
    
    
    
     }
     function squarenumber(input) {
        if (Math.floor(Math.sqrt(input))**2 != input ) {
            return(false)
        }
        else {
            return(true)
        }
     }
     function cubenumber(input) {
        if (Math.floor(Math.cbrt(input))**3 != input ) {
            return(false)
        }
        else {
            return(true)
        }
     }


     var checkprime = document.getElementById("isprime")
     var button = document.getElementById("button")
     var output = document.getElementById("prime")
     button.addEventListener("click", function() {
        var asdf = document.createElement("p")
        asdf.innerHTML = prime(checkprime.value);
        output.appendChild(asdf);

     })

