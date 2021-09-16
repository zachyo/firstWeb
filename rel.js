alert("Yes!!!")

function dropdownMenu() {
    var x = document.getElementById("dropdownClick")
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

var value = document.getElementById("form").value

// document.getElemenById("form").onclick(removeP());

document.querySelector("form").addEventListener('click', function(event) {
    console.log('here');
    document.getElementById("username").innerHTML = "Username";
})

function removeP() {
    document.getElementById("username").innerHTML = "Username";
}