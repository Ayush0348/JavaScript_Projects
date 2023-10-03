window.addEventListener("mousemove", function(e) {
    var rect = document.querySelector(".rect");

    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        e.clientX
        );
    gsap.to(".rect",{
        left: xval+"px", 
        ease: Power3
    })
})