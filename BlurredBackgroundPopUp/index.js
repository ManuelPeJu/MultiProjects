const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popUpContainerEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popUpContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popUpContainerEl.classList.add("active");
})