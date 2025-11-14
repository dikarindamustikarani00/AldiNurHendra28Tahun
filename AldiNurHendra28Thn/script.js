let music = document.getElementById("bgMusic");
let video = document.getElementById("videoPlayer");

window.onload = () => {
    document.getElementById("popupRules").style.display = "flex";
};

function closeRules() {
    document.getElementById("popupRules").style.display = "none";
}

function playMusic() {
    music.play();
}

function openVideo() {
    music.pause();
    document.getElementById("popupVideo").style.display = "flex";
}

function closeVideo() {
    document.getElementById("popupVideo").style.display = "none";
    video.pause();
}

function openGift() {
    document.getElementById("popupGift").style.display = "flex";
}

function closeGift() {
    document.getElementById("popupGift").style.display = "none";
}