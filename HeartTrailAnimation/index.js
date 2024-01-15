

const bodyEL  = document.querySelector("body");

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
  }


bodyEL.addEventListener("mousemove", (event) => {
    
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEL.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);

})