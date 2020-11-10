let menuItems = document.getElementById('menuItens')



let icon = document.querySelector('.menu-icon')

icon.addEventListener('click', ()=>{
menuItems.classList.toggle('active')
console.log('cliccou')
})


let bigImg = document.querySelector("#product-img")

let smallImg = document.querySelectorAll(".small-img-col img")




smallImg.forEach((img)=>{
    img.addEventListener("click",()=>{
        console.log(bigImg)
        bigImg.src = img.getAttribute('src')
    })
});

// Form 

let loginForm = document.getElementById('loginForm')
let RegForm = document.getElementById('regForm')

let Indicator = document.getElementById("Indicator")


function register(){
    RegForm.style.transform ="translateX(0px)";
    loginForm.style.transform = "translateX(0px)"
    Indicator.style.transform ="translateX(100px)"
}

function login(){
    RegForm.style.transform ="translateX(300px)";
    loginForm.style.transform = "translateX(300px)"
    Indicator.style.transform ="translateX(0px)"
}

/*

Script da store com Js

*/





itensLoja.map((item, index)=>{
 let itemPro = document.querySelector('.col-4').cloneNode(true)
 
})