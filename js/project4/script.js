var elem=document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    });
    val.addEventListener("mousemove",function(a){
        val.childNodes[3].style.left=a.x+"px";
    })


});
// var eleimg=document.querySelector("#elem1 img")

// elem.addEventListener("mousemove", function(a){
//     eleimg.style.left = a.x+"px";
//     eleimg.style.top = a.y+"px";
// })
// elem.addEventListener("mouseenter", function(a){
//     eleimg.style.opacity=1
// })
// elem.addEventListener("mouseleave", function(a){
//     eleimg.style.opacity=0
// }) this for single elem1 only if u need to apply for all then above is correct 