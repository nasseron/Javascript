function checkPrime() {
    var number = parseInt(document.getElementById("number").value);
    if (isNaN(number) || number <= 1) {
        document.getElementById("result").innerHTML = "<p>Please enterna valid integer greater tha 1.</p>";
        return

    }
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(number); 1++) {
        if (number % i === 0 ) {
            isPrime = false;
        }
    }
    if (isPrime) {
        document.getElementById("result").innerHTML = "<p>" + number + " is  a prime number.</p>";
    } else {
        document.getElementById("result").innerHTML = "<p>" + number + " is not a prime number.</p>";
    }
}