// let test = document.querySelector(".fa-handshake");


// let icon = document.querySelector(".test")



// test.onmouseover = function () {
//     test.style.opacity = "0"
//     test.style.transform = "translate(100px, -40px)"
//     icon.style.opacity = "1"

// }

//



let text = document.querySelectorAll(".main-nav li a")
let handshake = document.querySelectorAll(".main-nav li .fa-solid")

text.forEach(function (e) {
    e.onmouseover = function () {
        e.style.opacity = "1"
    }


});

handshake.forEach(function (e) {
    e.onmouseover = function () {
        e.style.transform = "translate(100px, -40px)"
        e.style.opacity = "0"
    }
    
})

let togel = document.querySelector(".menu")
let main = document.querySelector(".main-nav")

togel.addEventListener("click",(e)=>{
    main.classList.toggle("show")

})