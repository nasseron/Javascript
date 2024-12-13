function findLeapYear() {
    var startYear = parseInt(document.getElementById("startYear").value);
    var endYear = parseInt(document.getElementById("endYear").value);
    var leapYearList = "";
    for (var year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYearList += "<1i>" + year + "</1i>";
        }
    }
    document.getElementById("result").innerHTML = "<u1>" + leapYearList + "</u1>";
}
