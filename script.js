var key = '2001'
var x = '';
var old = '';

var balance = 1000;
function fun(n) {
    document.getElementById("pin").innerHTML += 'X'
    x += `${n}`
    old += `${n}`

}
function cl() {
    document.getElementById("pin").innerHTML = ''
}
function ok() {
    if (x == key) {
        location.href = "services.html"
    }
    else {
        document.getElementById("pin").innerHTML = "Incorrect PIN"
    }
}
function func(n) {
    document.getElementById("amount").innerHTML += `${n}`
}
function c() {
    document.getElementById("amount").innerHTML = ''

}
function calc() {
    amount = document.getElementById("amount").innerHTML;
    if (document.getElementById("amount").innerHTML % 100 == 0) {
        $("#message").html('Your transaction is being processsed, Please wait')
        $(".pop-up").css("display", "block");
        // $("#close").attr("href", "final.html")
        balance -= amount
        setTimeout(() => {
            $(".pop-up").css("display", "none");
            location.href = "final.html"
        }, 2500);
    }
    else {
        $("#message").html('Enter denominations in multiples of ₹100')
        $(".pop-up").css("display", "block")
        setTimeout(() => {
            $(".pop-up").css("display", "none");
            document.getElementById("amount").innerHTML= "";
        }, 2500);
        // $("#close").attr("href", "savings.html")
    }
}
function funct(n) {
    document.getElementById("amount").innerHTML += `${n}`
}
function calcu() {
    amount = document.getElementById("amount").innerHTML;
    if (document.getElementById("amount").innerHTML % 100 == 0) {
        $("#message").html('Your transaction is being processsed, Please wait')
        $(".pop-up").css("display", "block");
        $("#close").attr("href", "final.html")
        balance = balance + amount

        setTimeout(() => {
            // $("#message").html('Your transaction is being processsed, Please wait')
            $(".pop-up").css("display", "none");
            // $("#close").attr("href", "final.html")
            // balance = balance + amount
            location.href = "final.html"

        }, 2500);

    }
    else {
        $("#message").html('Enter denominations in multiples of ₹100')
        $(".pop-up").css("display", "block")
        $("#close").attr("href", "deposit.html")
        setTimeout(() => {
            $(".pop-up").css("display", "none")
            document.getElementById("amount").innerHTML = "";
        }, 2500);
    }
}


function oka() {
    if (old == key) {
        location.href = "new pass.html";
    }
    else {
        $("#message").html("Incorrect PIN");
        $(".pop-up").css("display", "block");
        setTimeout(() => {
            $(".pop-up").css("display", "none");
        }, 2000);

    }
}
var newpass = ''
function okay() {
    newpass = document.getElementById("pin").innerHTML
    key = newpass
    $("#message").html("PIN updated successully!")
    $(".pop-up").css("display", "block")
//     $("#close").attr("href", "final1.html")
    setTimeout(() => {
        $(".pop-up").css("display", "close");
        location.href = "final1.html";
    }, 2000);
}
function showbalance() {
    $("#message").html("Available balance in your account is " + balance)
    $(".pop-up").css("display", "block")
    $("#close").attr("href", "final1.html")
}
