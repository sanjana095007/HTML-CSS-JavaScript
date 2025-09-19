var products=[
    {name: "Silk",headline:"Pure Silk Saree",price:"45,000",image:"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FyZWV8ZW58MHx8MHx8fDA%3D"},
    {name:"Gown",headline:"Designer Gown",price:"25,000",image:"https://images.unsplash.com/photo-1736849614178-ab56ebf55d9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhbmN5JTIwc2FyZWV8ZW58MHx8MHx8fDA%3D"},
    {name:"Lehenga",headline:"Heavy Worked Lehenga",price:"20,000",image:"https://images.unsplash.com/photo-1746372283841-dbb3838f9935?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var popular=[
    {name: "Suits",headline:"stylish suits",price:"25,000",image:"https://images.unsplash.com/photo-1695857605560-86f73d3ba09d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Jackets",headline:"Brown Jacket",price:"15,000",image:"https://imgmediagumlet.lbb.in/media/2023/07/64b8d65b5758625afe7bf4f5_1689835099019.jpg"},
    {name:"Coats",headline:"Black coat",price:"20,000",image:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJsYWNrJTIwc2hpcnRzJTIwZm9yJTIwbWVuJTIwbW9kZWxzfGVufDB8fDB8fHww"}
];
var cart=[];
function addProduct(){
    var clutter="";
    products.forEach(function(product,index){
        clutter+=`<div class="box">
                <div class="boxinside">
                <img src="${product.image}"/>
                </div>
                <h3 class="name">${product.name}</h3>
                <div class="plus1">
                <button data-index="${index}" class="add"><i data-index="${index}" class="add ri-add-circle-fill"></i></button>
                </div>
                <h4 class="head">${product.headline}</h4>
                <h5 class="price"> &#8377;${product.price}</h5>
            </div>`;
    })
    document.querySelector("#products").innerHTML=clutter
}
function addpopularproducts(){
    var clutter="";
popular.forEach(function(popular){
    clutter +=`<div class="abt">
                <div>
                    <img class="image" src="${popular.image}" alt="">
                </div>
                <h3 class="eyes">${popular.name}</h3>
                <h4 class="bisco">${popular.headline}</h4>
                <h5 class="dollar"> &#8377;${popular.price}</h5>
            </div>`;
})
document.querySelector("#popular").innerHTML=clutter;
}
function addtocart(){
    document.querySelector("#products")
    .addEventListener("click",function(details){ 
        if(details.target.classList.contains('add')){
           cart.push(products[details.target.dataset.index]);

        }
    })
}
function showcart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";
        var clutter ="";
        cart.forEach(function(products,index){
            clutter +=`
                 <div class="cart-item">
                    <img class="display" src="${products.image}"  alt="">
                <div class="info">
                <h3 class="names">${products.name}</h3>
                <h4 class="prices">${products.price}</h4>
                </div>
                </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML=clutter;

    })
}
showcart();
addtocart();
addProduct();
addpopularproducts();