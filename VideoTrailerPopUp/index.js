const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const movieEl = document.querySelector("video")

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
})


closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    movieEl.pause();
    videlEl.currentTime = 0;
})