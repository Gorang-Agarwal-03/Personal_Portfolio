let tablelinks = document.getElementsByClassName("tab-link")
let tableContaints = document.getElementsByClassName("tab-containts")

function opentab(tablname){
    for(tablink of tablelinks){
        tablink.classList.remove("active_link")
    }
    for(tabcontaint of tableContaints){
        tabcontaint.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tablname).classList.add("active_tab");

}

var tl = gsap.timeline();

tl.from("nav img", {
    y:-20,
    opacity:0,
    duration: 0.5,
    delay: 0.5,
})
tl.from("nav ul li", {
    y:-20,
    opacity:0,
    duration: 0.5,
    stagger : 0.2,
})
tl.from(".header-text", {
    y:-20,
    opacity:0,
    duration: 0.5,
    delay: 0.5,
    scale: 1,
})