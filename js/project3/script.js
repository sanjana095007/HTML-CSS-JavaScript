var main=document.querySelector("#main");
var cur=document.querySelector(".cursor");

main.addEventListener("mousemove",function(a){
    cur.style.left= a.x+"px"
    cur.style.top=a.y+"px"
    // cur.style.backgroundColor="red"
})
