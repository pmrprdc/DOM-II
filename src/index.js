import { createResponseComposition } from 'msw';
import './less/index.less'

// Your code goes here!
const mainNav = document.querySelector(".main-navigation");





mainNav.addEventListener('mouseenter', (evt)=> {
    mainNav.setAttribute("style","background-color: #FAE3D1;");
})

mainNav.addEventListener('mouseleave', (evt)=>{
    mainNav.setAttribute("style", "background-color: white;");
})

/// Changing background color on scroll

window.addEventListener("scroll", function changeBg(){
  
   if(this.window.scrollY >300 && this.window.scrollY < 500 ){
        this.document.body.style.backgroundColor = "yellow"
    } else if(this.window.scrollY >0 && this.window.scrollY < 299 ){
        this.document.body.style.backgroundColor = "green"
    }
})

// zoomming in on bus on click
const busImage = document.querySelector(".intro img");

busImage.addEventListener("click", function(evt){
   busImage.setAttribute("style","object-fit: none;")
} )

// on keydown space bar the page goes blank and comes back alive

document.addEventListener("keydown", (evt)=>{
    if(evt.key === "h"){
        busImage.setAttribute ("style", `transition: opacity 1000m
        s; opacity: 0; `)
     
         
    } else if(evt.key === "s"){
        busImage.setAttribute ("style", `transition: opacity 1s; opacity: 1;`)
        
    }
    


})


// hide nav on scroll down, show nav on scroll up
function zoom(event) {
    
    if(event.deltaY > 0){
        mainNav.style.display = "none";
    } else if (event.deltaY < 0) {
        mainNav.style.display = "flex";
    }

  }
  
 //addeventlistener


 // spin nav slowly on load
 window.addEventListener("wheel", zoom);

 window.addEventListener("load", (evt)=>{
    mainNav.setAttribute("style", "transform: rotate(360deg); transition: transform 10s")
   
 })
  

 // add border to image on window resize
const mapImg = document.querySelector(".img-content");


window.addEventListener("resize", (e)=>{
    mapImg.setAttribute("style","border: 1px solid red;")
})


// second image gets border on doubleclick



const veniceImg = document.querySelector(".img-content:nth-of-type(1) img")

veniceImg.addEventListener("dblclick", (e)=>{
    veniceImg.style.border = "1px solid black"
    console.log("doubleClicked")
})


const body = document.querySelector("body");

window.addEventListener("mousemove", (e)=>{
if(e.movementX > 0){
    body.setAttribute("style", "background-color: beige;")
} else if (e.movementX < 0){
    body.setAttribute("style", "background-color: white;")
}


})


// BLANK SCREEN ON MOUSE OUT


window.addEventListener("mouseout", (e)=>{
    body.setAttribute("style", "display:none;")
 
})

window.addEventListener("mouseover", (e)=>{
    
    body.setAttribute("style", "display: block")
   
})

// ON MOUSE DOWN ANIMATES BACKGROUND-COLOR TO BLUE


window.addEventListener("mousedown", (e)=>{
    body.setAttribute("style", "transition: background-color 1s ease-in; background-color: blue")
})


const navlinks = document.querySelectorAll(".nav-link");



// preventing default for links 


navlinks.forEach(x=>{
    x.addEventListener("click",(e)=>{
        e.preventDefault();
        window.alert("you have been hacked")
    })
})