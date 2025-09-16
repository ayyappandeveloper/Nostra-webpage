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
    sidenav.style.left="0%";
})

navhide.addEventListener("click",()=>{
    sidenav.style.left="-20%";
})