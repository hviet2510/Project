
/* -----------------------------------------
   1. Chuyển về loading.html khi reload trang
------------------------------------------ */
if (!sessionStorage.getItem("loadedFromLoading")) {
    window.location.href = "loading.html";
}
/* -----------------------------------------
   2. Cập nhật năm hiện tại
------------------------------------------ */
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* -----------------------------------------
   3. Hiệu ứng reveal on scroll
------------------------------------------ */
const reveals = document.querySelectorAll('.about, .experience, .exp-card, .hero-left');

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.transition = "all .6s cubic-bezier(.2,.9,.3,1)";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(18px)";
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
