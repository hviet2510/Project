// small helpers: current year + simple reveal on scroll
document.getElementById('year').textContent = new Date().getFullYear();

// reveal elements on scroll (simple)
const reveals = document.querySelectorAll('.about, .experience, .exp-card, .hero-left');
function revealOnScroll(){
  reveals.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.transition = 'all .6s cubic-bezier(.2,.9,.3,1)';
    } else {
      el.style.opacity = 0.0;
      el.style.transform = 'translateY(18px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
