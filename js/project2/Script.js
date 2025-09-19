var con=document.querySelector('#container');
var icon=document.querySelector("i");

con.addEventListener("dblclick",function(){
    icon.style.transform= "translate(-50% -50%) ";
    icon.style.transform="scale(1)";
    icon.style.opacity=0.8;

    setTimeout(function(){
        icon.style.opacity=0;
    },1000);

    setTimeout(function(){
        icon.style.transform= "translate(-50% -50%) ";
        icon.style.transform="scale(0)";
    },2000);
} )