// Ad
var close=document.getElementById("close")
var notify=document.getElementById("notify")

close.addEventListener("click",function(){
    notify.remove()
});

// side-navbar
var sidenavbar=document.getElementById("side-nav")
var sidenav=document.getElementById("humburger-navbar")
var navhide=document.getElementById("nav-hide")
sidenavbar.addEventListener("click",function(){
    sidenav.style.left="0%"
})

navhide.addEventListener("click",()=>{
    sidenav.style.left="-20%"
})

// search box
var ProductContainer=document.querySelector(".product_collection")
var search=document.getElementById("input-box")
var ProductList=ProductContainer.querySelectorAll(".product")

search.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    
    for(count=0;count<ProductList.length;count++){
        var productname=ProductList[count].querySelector("h3").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            ProductList[count].style.display="none"
        }
        else{
            ProductList[count].style.display="block"
        }
    }
})

//checkbox
    var summer=document.getElementById("summer")
    var ProductContainer=document.querySelector(".product_collection")
    var ProductList=ProductContainer.querySelectorAll(".product")
 

    summer.addEventListener("change",function(event){
 var enteredvalue=event.target.value.toUpperCase()
    
    for(count=0;count<ProductList.length;count++){
        var productname=ProductList[count].querySelector("h3").textContent
        if(event.target.checked){

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            ProductList[count].style.display="none"
        }
        else{
            ProductList[count].style.display="block"
            
        }
    }
    else{
        ProductList[count].style.display="block"
    }

    }
    })