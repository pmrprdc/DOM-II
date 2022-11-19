import './less/index.less'

// Your code goes here!
const mainNav = document.querySelector(".main-navigation");

mainNav.addEventListener('mouseenter', (evt)=> {
    mainNav.setAttribute("style","background-color: #FAE3D1;");
})

mainNav.addEventListener('mouseleave', (evt)=>{
    mainNav.setAttribute("style", "background-color: white;");
})