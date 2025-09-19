var arr=[
    {name:"rose", images:"https://images.unsplash.com/photo-1710629357740-546115c6f75b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"panda", images:"https://images.unsplash.com/photo-1525382455947-f319bc05fb35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZGF8ZW58MHx8MHx8fDA%3D"},
    {name:"nature", images:"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"},
    {name:"women", images:"https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D"},
    {name:"foods", images:"https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D"},
    {name:"animal", images:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"}
]
function show(){
    var clutter="";
    arr.forEach(function(obj){
        clutter +=` <div class="box" id="image">
    <img src="${obj.images}" alt="image">
    </div>`
    })
    document.querySelector(".container")
    .innerHTML=clutter;
}
function handel(){
    var inputs=document.querySelector("#seabar");
   inputs.addEventListener("focus",function(){
    document.querySelector(".overlay").style.display="block";
    })

    inputs.addEventListener("blur",function(){
    document.querySelector(".overlay").style.display="none";
    })

    inputs.addEventListener("input",function(){
        const filterarr=arr.filter(obj => obj.name.toLowerCase().startsWith(inputs.value.toLowerCase()));
        var clutter ="";
        filterarr.forEach(function(obj){
            clutter += `<div class="res flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <i class="ri-search-line mr-3 text-gray-500"></i>
                    <h3 class="font-medium">${obj.name}</h3>
                </div>`;
        });
        

         document.querySelector(".searchdata").style.display="block";
        document.querySelector(".searchdata").innerHTML=clutter;
        })
}
handel();
show();