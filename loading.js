document.addEventListener("DOMContentLoaded", function () {
    document.body.style.cursor = "pointer"; // hiển thị click được

    document.body.addEventListener("click", () => {
        document.body.classList.add("page-exit");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 600); // delay để animation chạy xong
    });
});
