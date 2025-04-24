var cont = 0;

function ShowText() {
    cont++;
    if (cont > 5){
        var T = document.getElementById("hidden-div");
        T.style.display = "block";  // <-- Set it to block
        var B = document.getElementById("hide-this-after");
        B.style.display = "none";  // <-- Set it to none
    }
}
