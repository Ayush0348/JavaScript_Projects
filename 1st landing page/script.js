var tl = gsap.timeline();
tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:0.7,
    opacity:0,
    stagger:0.2  // sab elements ek ke bad ek ite time interval ke bad aayenge.
})
tl.from("#main h1",{
    y:120,
    opacity:0,
    stagger:0.3
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})