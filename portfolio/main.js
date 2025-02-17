        //  Toggle navbar      //


let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let close=document.querySelector('.fa-xmark');
close.onclick=()=>{
    navbar.style.display="none"
}
menuIcon.onclick = () => {
    navbar.style.display="block"
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
    
    
} 
function toggleicon() {
    document.querySelector('.navbar').classList.toggle('show');
}