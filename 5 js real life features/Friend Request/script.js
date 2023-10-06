let flag = 0;
var check = document.querySelector("h3");
var bt = document.querySelector("#btn")
bt.addEventListener("click",function() {
    if(flag == 0){
        check.innerHTML = "Friends";
        check.style.color = "green";
        bt.innerHTML = "Remove"

        flag = 1;
    } 
    else{
        check.innerHTML = "Strangers";
        check.style.color = "red";
        bt.innerHTML="Add Friends";

        flag = 0;
    }

})

gsap.from(".box",{
    y:100,
    duration: 1,
    opacity: 0,
    delay: 1,
})

gsap.from("img",{
    // x:100,
    duration: 1,
    opacity: 0,
    delay: 1,
    scale: 0.3
})