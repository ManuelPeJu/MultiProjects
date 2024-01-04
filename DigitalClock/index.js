const hourEl = document.getElementById("hour");
const hourMi = document.getElementById("minutes");
const hourSe = document.getElementById("seconds");
const hourAm = document.getElementById("am_pm");

const updateClock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = "AM";

    if(h > 12){
        h = h - 12;
        am_pm = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    

    hourEl.innerText = h;
    hourMi.innerText = m;
    hourSe.innerText = s;
    hourAm, (innerText = am_pm);
    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock()