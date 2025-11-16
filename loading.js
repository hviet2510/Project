const hamster = document.getElementById("hamster");

// Khi click vào hamster
hamster.addEventListener("click", () => {
    hamster.classList.add("hamster-exit");

    // fade toàn trang
    document.body.classList.add("page-exit");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 800); // đúng bằng thời gian animation
});
