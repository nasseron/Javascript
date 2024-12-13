function calculateProbability() {
             var numDice = parseInt(document.getElementById("numDice").value);
             var desiredSum = parseInt(document.getElementById("desiredSum").value);
             var numTrials = 1000;
             var successCount = 0;
             for (var i = 0; i < numTrials; i++) {
                 var sum = 0;
                 for (var j = 0; j < numDice; j++) {
                     sum += Math.floor(Math.random() * 6) + 1;
                 }
                 if (sum === desiredSum) {
                     successCount++;
                 }
             }
             var probability = (successCount / numTrials) * 100;
             document.getElementById("result").innerHTML = "Probability to get  sum" + desiredSum + " with " + numDice + "dice is " + probability.toFixed(2) + "%";

         }