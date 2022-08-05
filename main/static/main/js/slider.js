//------------------------------SLIDER------------------------------------


const images = document.querySelectorAll('.slider_image');
const slider_track = document.querySelector('.slider_track');
let count = 0; // количество пролистываний вперед
let width;
let k = 1; // количество изображений на слайдере

function init() {	
	width = document.querySelector('.slider_window').offsetWidth;
	slider_track.style.width = width*images.length/k + 'px';
	images.forEach(item => {
		item.style.width = width/k + 'px';
		item.style.height = 'auto';
	});	
    rollSlider();
}
window.addEventListener('resize', init);
init();

function slidePrev(){
    if (count < 1 && count > 0) {
        count = 0;
        rollSlider();
        return;
    }
    count--;    
    if (count < 0){
        count = images.length/k - 1;                
    }        
    rollSlider();
}

document.querySelector('.slider_button_prev').addEventListener('click', slidePrev);

function slideNext(){     
    if (images.length - (count+1)*k >= k) {
        count++;
    } else if(images.length - (count+1)*k < k && images.length - (count+1)*k > 0){
        // if (count >= (images.length/k - 1)){        
        //     count = 0;
        //     rollSlider();
        //     return;
        // }
        count += (images.length - (count+1)*k)/k;
    } else{
        count = 0;
    }
    console.log(count);        

    rollSlider();
    
}

document.querySelector('.slider_button_next').addEventListener('click', slideNext);

function rollSlider(){
    slider_track.style.transform = 'translate(-'+count*width+'px)'; 
}

// const dot = document.querySelector('.slider_indicator_dot.active');
// const indicator = document.querySelector('.slider_indicator');
// let dots_count;

// function showIndicator(){
//     indicator.innerHTML = '<span class="slider_indicator_dot"></span>';
//     dots_count = Math.ceil(images.length/k);
//     for (let index = 0; index < dots_count; index++) {
//         indicator.append('<span class="slider_indicator_dot"></span>');
//     }
// }
// showIndicator();
