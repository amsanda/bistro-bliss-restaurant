const track = document.querySelector(".testimonial-track");

const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

track.style.transform = `translateX(-${index * 100}%)`;

dots.forEach(dot=>dot.classList.remove("active"));

dots[index].classList.add("active");

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

current=index;

showSlide(current);

});

});

setInterval(()=>{

current++;

if(current>=dots.length){

current=0;

}

showSlide(current);

},5000);