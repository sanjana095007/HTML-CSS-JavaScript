function Homepage(){
    gsap.set(".zoomm",{scale:5} )
var t1=gsap.timeline({
 scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:1
    }
});
t1
.to(".mainvideo",{
   clipPath: "circle(0% at 50% 50%)",
    ease: "power2.inOut",
}, 'a')

.to(".zoomm",{
    scale:1,
    ease: "power2.inOut",
}, 'a')
.to(".ltf",{
    xPercent:-10,
    stagger:.03,
    ease: "power4.inOut",
}, 'b')
.to(".rig",{
    xPercent:10,
    stagger:.03,
    ease: "power4.inOut",
}, 'b')
}
function page3animation(){
    gsap.to(".silde", {
   
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".page3",  
        start: "top top",
        end:"bottom bottom",
        scrub: 1,
    },
    xPercent:-200,
    ease:"power4.inOut"
});
}
var pic = document.querySelector(".listelem");
var pictureElem = pic.querySelector(".picture");
pic.addEventListener("mousemove", function(e){
    gsap.to(pictureElem, {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
        ease: "power4.out",
        duration: 0.5
    });
});

pic.addEventListener("mouseleave", function(e){
    gsap.to(pictureElem, {
        opacity: 0,
        ease: "power4.out",
        duration: 0.4
    });
});
function paraanimation(){
var clutter="";
document.querySelector(".para2")
.textContent.split("")
.forEach(function(e){
    if(e=== " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".para2").innerHTML=clutter;
gsap.set(".para2 span",{opacity: .1})
gsap.to(".para2 span",{
    scrollTrigger:{
        trigger:".para",
        start:"top 50%",
        end:"bottom 90%",
        scrub: 1,
    },
    opacity:1,
    stagger: .03,
    ease: "Power4.out"
})
}
function loco(){
     (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsule(){
    gsap.to(".capsule1:nth-child(2)",{
        scrollTrigger:{
        trigger: ".page4",
        start: "top 70%",
        end:"bottom bottom",
        scrub:1
    },
    y:0,
    ease: "Power4.out"
    })
    
}
function bodycolor(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
           document.body.setAttribute("theme",e.dataset.color);  
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);  
        }
    })
})
}
bodycolor();
capsule();
loco();
paraanimation();
Homepage();
page3animation();