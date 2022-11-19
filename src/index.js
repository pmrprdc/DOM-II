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