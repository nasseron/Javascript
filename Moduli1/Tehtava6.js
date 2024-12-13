function calculateSquareRoot() {
            const shouldCalculate = confirm("Should I calculate the squrae root?");
            if (shouldCalculate) {
                let number = prompt("Enter a number:");
                number = parseFloat(number);
                if (isNaN(number)) {
                    document.body.innerHTML = "Please enter a valid number.";
                } else if (number < 0) {
                    document.body.innerHTML = "The square root of a negative number is not defined.";

                } else {
                    const squareRoot = Math.sqrt(number);
                    document.body.innerHTML = "The square root of " + number + " is " + squareRoot + " . ";

                }

            } else {
                document.body.innerHTML = "The square root is not calculated.";
            }
        }