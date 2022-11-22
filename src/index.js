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
    console.log(window.scrollY);
    console.log(scrollable);
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
        busImage.setAttribute ("style", `transition: opacity 1s; opacity: 0; `)
        console.log("something happened")
         
    } else if(evt.key === "s"){
        busImage.setAttribute ("style", `transition: opacity 1s; opacity: 1;`)
        
    }
    


})

