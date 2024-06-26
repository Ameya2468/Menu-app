let menu=[];
let allAddToCartButtons=[];
let allCartDeleteButtons=[];
let cart =[];
let cartContent=[];
updateCartCounter();
displayCartDishes();

function updateCartCounter(){
    document.getElementById("cartButton").innerHTML = "&#x1F6D2;" + cart.length;
}

if(import.meta.env.DEV){
    import("../api/browser").then(({worker}) => 
    worker.start()
    .then(() => fetch("/dishes"))
    .then((res) => res.json())
    .then((res) => (menu = res))
    );
}

let allDishes= document.getElementById("allDishes");
let content="";
displayAll(menu);

function displayAll(dishes){
    content="";
dishes.forEach((dish) => {
    let individualDish =`<div class="dish">
        <img src= ${dish.img} alt=${dish.title}>
        <div class="dishOuter">
         <div class="dishInner">
           <h3 class="dishName">${dish.title}</h3>
           <h3 class="dishPrice">$${dish.price}</h3>
         </div>
         <hr />
         <p class="dishContent">
           ${dish.desc};
         </p>
         <button id=${dish.id} class="dishCartButton"> Add To Cart</button>
        </div>
      </div>`;
      content+= individualDish;
});

allDishes.innerHTML=content;
getCartButtons();
}
// Filter Logic
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => 
    button.addEventListener("click",(e) => {
        filterItems(e.target.innerText);
    })
) ;

function filterItems(category){
    allDishes.innerHTML+="";
    if (category == "All"){
        displayAll(menu);
    }else{
        let filteredItems=menu.filter(
            (dish) => dish.category.toLowerCase() == category.toLowerCase()
        );
        displayAll(filteredItems);
    }
}

// Select All ADD to Cart Buttons
function getCartButtons(){
allAddToCartButtons = document.querySelectorAll(".dishCartButton");
allAddToCartButtons.forEach((button) => 
    button.addEventListener("click",(e) => {
        addDishToCart(e.target.id);
    })
);
}

function addDishToCart(dishId){
   let flag=-1;
    menu.forEach((dish) => {
        if(dish.id == dishId){
            cart.forEach((cartDish)=>{
                if (cartDish.id==dishId){
                    cartDish.quantity +=1;
                    flag =1;
                }
            });
            if (flag != 1){
                let tempDish ={...dish,quantity: 1};
                cart.push(tempDish);
            }
        }
    });
    updateCartCounter();
    displayCartDishes();
}


function displayCartDishes(){
    cartContent="";
    cart.forEach((dish) => {
        let individualDish =`<div class="cartDish">
        <img src=${dish.img} alt="">
        <h3>${dish.title}</h3>
        <h3>${dish.price}</h3>
        <h3>${dish.quantity}</h3>
        <button class="cartDelete" id=${dish.id}>Remove</button>
      </div>`;

      cartContent += individualDish;
    });

    document.getElementById("cart").innerHTML = cartContent;
    getDeleteButtons();
}

//select all Delete buttons
function getDeleteButtons(){
allCartDeleteButtons = document.querySelectorAll(".cartDelete");
allCartDeleteButtons.forEach((button) => 
    button.addEventListener("click",(e) => {
       removeDishFromCart(e.target.id);
    })
);
}

function removeDishFromCart(removeID){
    let flag =-1;
    let tempID=-1;
    for(let i=0; i< cart.length; i++){
        if(cart[i].id == removeID){
            flag =1;
            tempID = i;
        }
    }
    if(flag){
        cart.splice(tempID,1);
    }
    updateCartCounter();
    displayCartDishes();
}