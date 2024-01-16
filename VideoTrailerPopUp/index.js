const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const movieEl = document.querySelector("video")

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
    movieEl.autoplay = true;
})


closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    movieEl.pause();
    movieEl.currentTime = 0;
    
})