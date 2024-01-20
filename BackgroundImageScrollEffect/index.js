const bgImageEl = document.getElementById("bg-image");


const updateImage = () => {
    bgImageEl.style.opacity = 1 - window.scrollY / 700;
    bgImageEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}

window.addEventListener("scroll" , () => {
    updateImage();
})