const pxBox = document.querySelector('#pixel');
const remBox = document.querySelector('#rem');
const baseSize = document.querySelector("#base");
const scrollLine = document.querySelector(".scroll-line");
const html = document.querySelector("html");

window.addEventListener("scroll",()=>{
    let winTop = window.scrollY;
    let scrollHeight = html.scrollHeight;
    let clientHeight = html.clientHeight;
    let scrolled = (winTop/(scrollHeight - clientHeight)) * 100;

    scrollLine.style.width = `${scrolled}%`;
});

window.addEventListener("load", (e) => {
    pxBox.value = "10";
    remBox.value = "0.625";
    baseSize.value = "16";
});

pxBox.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value * 0.0625);

    remBox.value = Math.round(((e.target.value / baseSize.value) + Number.EPSILON) * 100) / 100;
    Math.round((rem + Number.EPSILON) * 100) / 100;
    remBox.style.color = "#1a79ff";
    pxBox.style.color = "#000";
});

remBox.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value / 0.0625);

    pxBox.value = Math.round(((e.target.value * baseSize.value) + Number.EPSILON) * 100) / 100;
    pxBox.style.color = "#1a79ff";
    remBox.style.color = "#000";
});