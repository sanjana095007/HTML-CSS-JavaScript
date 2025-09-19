var arr=[
    {name:"Pardesiya",url:"songs/Pardesiya.mp3",image:"images/new2.jpeg"},
    {name:"Bheegi Saree",url:"songs/Bheegi Saree.mp3",image:"images/image2.jpg"},
    {name:"Sundari Ke Pyar",url:"songs/Sundari Ke Pyar.mp3",image:"images/img2.jpg"},
    {name:"Sunn Mere Yarr",url:"songs/Sunn Mere Yaar.mp3",image:"images/new.jpg"}
]
 var allsongs=document.querySelector("#allcard")
 var poster=document.querySelector("#left")
 var players = document.querySelector("#play")
 var backward= document.querySelector("#backward")
 var forward = document.querySelector("#forward")
 var audio = new Audio()
 var selectedsong =0

  function mainfunction(){
    var clutter="";
    arr.forEach(function(elem,index){
    clutter +=`<div class="cards" id=${index}> 
                    <div class="songs">
                        <img src=${elem.image} alt="">
                        <h2>${elem.name}</h2>
                    </div>
                        <h4>3:45</h4>
                </div>`
})
    allsongs.innerHTML=clutter
    audio.src = arr[selectedsong].url
    poster.style.backgroundImage = `url(${arr[selectedsong].image})`

  }
  mainfunction();
    allsongs.addEventListener("click",function(detail){
    selectedsong =detail.target.id
    mainfunction();
    players.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play();
})
    var flag=0
    players.addEventListener("click",function(){
    if(flag ==0){
        players.innerHTML=`<i class="ri-pause-line"></i>`
        mainfunction()
        audio.play()
        flag =1
    }
    else{
       players.innerHTML=`<i class="ri-play-fill"></i>`
       mainfunction()
        audio.pause()
        flag=0
    }
})
forward.addEventListener("click", function () {
    if (selectedsong < arr.length - 1) {
        selectedsong++
        mainfunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedsong > 0) {
        selectedsong--
        mainfunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})