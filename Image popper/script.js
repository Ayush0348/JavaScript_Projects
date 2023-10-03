//throttling - kisi particular code ke no. of executions ko kam kar dena.
var rec = document.querySelector(".rec");

// rec.addEventListener("mousemove", function(e){
    
// });
// Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0;
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){
          prev = now;
     
          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args); 
        }
      }
    }


rec.addEventListener("mousemove", throttleFunction((e)=>{
    //less repetation code.

    var divv = document.createElement("div");
    divv.style.width = "150px";
    divv.style.position = "absolute";
    divv.style.height = "150px";
    // divv.style.backgroundColor = "yellow";
    divv.style.overflow = "hidden";

    divv.style.left = e.clientX + "px";
    divv.style.top = e.clientY + "px";


    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1622925566273-d7cfdcc34ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transform = "translateY(90%)";

    divv.appendChild(img);
    document.body.appendChild(divv);

    gsap.to(img,{
        y:"0",
        ease: Power2,
        duration: .8
    });

    gsap.to(img,{
        y:"100%",
        ease: Power2,
        delay: .6
    });

    setTimeout(function() {
        divv.remove();
    },1500)

}, 500));