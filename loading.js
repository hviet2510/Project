document.getElementById("hamsterClick").onclick = function () {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 600); // 0.6s khớp với fade-out
};
