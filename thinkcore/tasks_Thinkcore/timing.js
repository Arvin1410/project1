
document.getElementById("btn").addEventListener('click', function sub() {
    var countDownDate = prompt("enter the time in seconds");

    // Update the count down every 1 second
    var x = setInterval(function () {


        document.getElementById("demo").innerHTML = countDownDate + " sec";
        countDownDate = countDownDate - 1;
        if (countDownDate < 0) {
            clearInterval(x);
            (document.getElementById("demo").innerHTML = "EXPIRED")
        }

    }, 1000);

})

