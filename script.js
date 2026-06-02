// ================================
// 카카오맵 이동 함수
// ================================
function openKakaoMap(name, lat, lng) {

    // 모바일이면 앱 연결 우선
    const mobileUrl =
        `kakaomap://look?p=${lat},${lng}`;

    // 웹 fallback
    const webUrl =
        `https://map.kakao.com/link/map/${name},${lat},${lng}`;

    // 모바일 체크
    const isMobile =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {

        // 앱 실행 시도
        window.location.href = mobileUrl;

        // 앱 없으면 웹으로
        setTimeout(() => {
            window.open(webUrl, '_blank');
        }, 500);

    } else {

        // PC면 웹 지도
        window.open(webUrl, '_blank');

    }
}