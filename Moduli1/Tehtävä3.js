function calculat() {
    var num1 = parseInt(prompt("Enter the first integer: "));
    var num2 = parseInt(prompt("Enter the second integer: "));
    var num3 = parseInt(prompt("Enter the third integer : "));

    var sum = num1 + num2 + num3
    var product = num1 * num2 * num3
    var average = sum / 3;
    document.getElementById("sum").innerHTML = "Sum";
    document.getElementById("product").innerHTML = "Product: " + product;
    document.getElementById("average").innerHTML = "Average: " + average.toFixed(2)
}
