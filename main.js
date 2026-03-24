const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add('show');
}
});
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();