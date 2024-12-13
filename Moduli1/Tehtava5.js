
function checkLeapYear() {
    let year = prompt("Enter a year to check if it's  a leap year: ");
    if (isNaN(yea) || year === "") {
        alert("Please enter a valid year.");
        return;
    }
    year = parseInt(year);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + "is a leap year!")
    } else {
        alert(year + "is not a leep year!");

    }
}