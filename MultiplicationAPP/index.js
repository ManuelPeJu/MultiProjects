const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);



let score = JSON.parse(localStorage.getItem("score"));
const scoreEl = document.getElementById("score");

if(!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`

const questionEl = document.getElementById("question")
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");


const correctAns = num1 * num2;

const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(score));
}

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});