 var statu=document.querySelector("h3")
 var addfrds=document.querySelector("#frd")
//   var removefrds=document.querySelector("#remove")
var check=0
  addfrds.addEventListener("click",function(){
    if(check==0){
        statu.innerHTML="Friend"
        statu.style.color="green"
        addfrds.innerHTML="Remove friend"
        check=1
    }
    else{
        
        statu.innerHTML="Stranger"
        statu.style.color="red"
        addfrds.innerHTML="Add Friend"
        check=0
    }
  })
//   removefrds.addEventListener("click",function(){
//     statu.innerHTML="Stranger"
//     statu.style.color="red"
//   })