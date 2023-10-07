var a = document.querySelector(".box");

var love = document.querySelector("h1");

a.addEventListener("dblclick", function(){
    love.style.scale = 1;
    love.style.opacity = 1;

    setTimeout(function(){
        love.style.opacity = 0;
    },900);

    setTimeout(function(){
        love.style.scale = 0;
    },1400);
}) 