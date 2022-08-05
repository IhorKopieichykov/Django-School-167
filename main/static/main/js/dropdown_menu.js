// раскрывающееся меню для мобильной версии
const menu__dropbutton = document.querySelector('.menu__dropbutton');
const menu = document.querySelector('.menu__nav_items');

menu__dropbutton.addEventListener('click', showMenu);

function showMenu() {      
    if (!menu.classList.contains("nav_items_show")) {
        menu__dropbutton.classList.add('active_button');
        menu.classList.add("nav_items_show");        
    } else{
        menu__dropbutton.classList.remove('active_button');
        menu.classList.remove("nav_items_show");         
    }      
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu__dropbutton')) {                
        menu.classList.remove('nav_items_show');        
        menu__dropbutton.classList.remove('active_button');
    }
}

const header = document.querySelector('.header_navigation__menu');

function showHeader(){
    let height = document.querySelector('.header_logo_title').offsetHeight;
    console.log(height);
    console.log(window.pageYOffset);
    if (window.pageYOffset >= height) {
        header.classList.add('fixed');
    }
    if (window.pageYOffset < height) {
        header.classList.remove('fixed');
    }
}

window.onscroll = showHeader;
