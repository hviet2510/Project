
// Xóa flag mỗi lần vào loading
sessionStorage.removeItem("loadedFromLoading");

// Khi click vào đâu cũng vào index
document.addEventListener("click", () => {
    sessionStorage.setItem("loadedFromLoading", "true");
    window.location.href = "index.html";
});
