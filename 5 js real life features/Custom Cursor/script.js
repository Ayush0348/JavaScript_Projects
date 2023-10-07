var main = document.querySelector(".wrapper");

var crsr = document.querySelector(".circle");

main.addEventListener("mousemove", function(e){
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
})