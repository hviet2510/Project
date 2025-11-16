// Reveal animation on scroll
const reveals = document.querySelectorAll('.reveal');

function handleReveal() {
    for (let r of reveals) {
        const rect = r.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            r.classList.add("active");
        }
    }
}

window.addEventListener("scroll", handleReveal);
handleReveal();
