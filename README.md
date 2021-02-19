# video-player 만들기 (2)
## javascript
---

1️⃣ 비디오 정지 기능

`stop` 버튼 누르면 비디오 정지 && 영상 첫 부분(00:00)으로 돌아가기
```js
function stopVideo(e) {
    video.currentTime = 0;
    video.pause();
}
stop.addEventListener("click", stopVideo);
```

2️⃣ 비디오의 재생 위치가 변경 될 때 time-update 변경 기능

현재 진행중인 video 진행bar 값(value)와 동일하게 time-setting도 update

```js
  video.addEventListener("timeupdate", (e) => {
 
    // 재생 슬라이드 bar (currentTime 속성은, 현재 재생중인 시간을 뜻한다)
    progress.value = (video.currentTime / video.duration) * 100;

    // 재생 시간 표시
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins); // 10 미만은 1자리이기 때문에 앞에 0을 붙여준다
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
});
```

