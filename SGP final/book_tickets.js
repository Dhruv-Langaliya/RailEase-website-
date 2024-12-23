document.getElementById("seat-input").addEventListener("click", function() {
    document.getElementById("seat-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("seat-modal").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById("seat-modal")) {
        document.getElementById("seat-modal").style.display = "none";
    }
};

// Assign seat selection
document.querySelectorAll(".seat").forEach(function(seat) {
    seat.addEventListener("click", function() {
        document.getElementById("seat-input").value = this.innerText;
        document.getElementById("seat-modal").style.display = "none";
    });
});

