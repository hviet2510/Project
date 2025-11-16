/* --- Animation khi click --- */
.page-exit {
    animation: fadeOutScale 0.8s ease forwards;
}

@keyframes fadeOutScale {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.92);
    }
}

/* Hamster effect khi chuyển trang */
.hamster-exit {
    animation: hamsterZoom 0.8s ease forwards;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));
}

@keyframes hamsterZoom {
    0% {
        transform: scale(1) rotate(0);
    }
    100% {
        transform: scale(1.4) rotate(10deg);
    }
}
