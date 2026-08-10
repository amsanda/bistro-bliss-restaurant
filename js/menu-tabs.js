const tabs = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".menu-card");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(btn=>btn.classList.remove("active"));

tab.classList.add("active");

const category = tab.dataset.category;

cards.forEach(card=>{

if(card.classList.contains(category)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});