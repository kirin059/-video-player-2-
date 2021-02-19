"use strict";

const video = document.querySelector(".screen");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector(".progress");
const timestamp = document.querySelector("#timestamp");

// 재생버튼 누르면 play, 한번 더 누르면 paused
function toggleVideoBtnStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.paused();
    }
}

play.addEventListener("click", toggleVideoBtnStatus);

// 비디오 화면 누르면 play, 한번 더 누르면 paused
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

video.addEventListener("click", toggleVideoStatus);

// update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

// Stop video
stop.addEventListener("click", (e) => {
    video.currentTime = 0;
    video.pause();
});
