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
    const scrollable = document.documentElement.scrollHeight - this.window.innerHeight;
    if (window.scrollY === scrollable){
    this.document.body.style.backgroundColor = "#ffc6d9"
    } else if(this.window.scrollY >300 && this.window.scrollY < 500 ){
        this.document.body.style.backgroundColor = "#FFE1C6"
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