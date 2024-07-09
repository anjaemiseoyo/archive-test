
/*function toggleBackground() {
    var body = document.querySelector('body');
    body.classList.toggle('no-background');
}

// 3초마다 toggleBackground 함수 실행
setInterval(toggleBackground, 700);*/



// 마우스 이동 이벤트를 감지하여 배경 이미지의 위치 조정
/*document.addEventListener('mousemove', function(event) {
    // 마우스의 위치 값 가져오기
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // 배경 이미지의 위치 조정
    var body = document.querySelector('body');
    var bgX = -(mouseX / body.clientWidth * 100 - 50); // 가로 위치 계산
    var bgY = -(mouseY / body.clientHeight * 100 - 50); // 세로 위치 계산
    body.style.backgroundPosition = `${bgX}% ${bgY}%`;
});*/


document.addEventListener('DOMContentLoaded', function() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (!isMobile) {
        document.addEventListener('mousemove', function(event) {
            // 마우스의 위치 값 가져오기
            var mouseX = event.clientX;
            var mouseY = event.clientY;

            // 배경 이미지의 위치 조정
            var body = document.querySelector('body');
            var bgX = -(mouseX / body.clientWidth * 100 - 50); // 가로 위치 계산
            var bgY = -(mouseY / body.clientHeight * 100 - 50); // 세로 위치 계산
            body.style.backgroundPosition = `${bgX}% ${bgY}%`;
        });
    }
});



