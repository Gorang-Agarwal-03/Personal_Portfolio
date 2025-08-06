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
gsap.from(".about-col-1 img",{
    opacity: 0,
    duration: 1,
    x:-500,
    scrollTrigger: {
        trigger: ".about-col-1 img",
        scroller: "body",
        scrub: 3,
        //markers: true,
        start: "top 50%",
        end: "top 25%",
}})
gsap.from(".about-col-2",{
    opacity: 0,
    duration: 1,
    x:500,
    scrollTrigger: {
        trigger: ".about-col-1 img",
        scroller: "body",
        scrub: 3,
        //markers: true,
        start: "top 50%",
        end: "top 25%",
}})