let bodyEl = document.getElementsByTagName("body")[0];
let cloudBackgroundEl = document.getElementsByClassName("cloud-bg")[0];
let mountainBackgroundEl = document.getElementsByClassName("mountain-bg")[0];
let mainBackgroundEl = document.getElementsByClassName("main-bg")[0];
let scrollDownBtnEl = document.getElementsByClassName("scroll-down-btn")[0];

let handleScrollBody = () => {
    let scrollPosition = window.scrollY;

    mountainBackgroundEl.style.top = scrollPosition * 0.1 + 464 + "px";
};
let handleClickScrollDown = () => {
    bodyEl.scrollTop = bodyEl.scrollHeight;
};

window.addEventListener("scroll", handleScrollBody);
scrollDownBtnEl.addEventListener("click", handleClickScrollDown);
