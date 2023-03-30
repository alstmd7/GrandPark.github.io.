// 모바일 메뉴 슬라이드 함수
function slideMenu() {
    // menu_toggle_btn이 클릭되었을 때
    $('.menu_toggle_btn').click(function () {
        // menu_sub 클래스들을 slideUP() 함
        $('.menu_sub').slideUp();
        // header_menu가 슬라이드 토글됨(500->0.5초)
        $('.header_menu').slideToggle(500);
    });
    // menu_title(메인 메뉴)가 클릭되었을 때
    $('.menu_title').click(function () {
        // 클릭된 menu_title(메인 메뉴)의 다음 형제 요소(next)인
        // menu_sub에서 slideToggle()을 실행
        $(this).next('.menu_sub').slideToggle(200);
        // 클릭된 menu_title의 부모 요소(parent)의 형제 요소(siblings)들 중
        // menu_sub 클래스들을 slideUP() 함
        $(this).parent().siblings().find('.menu_sub').slideUp(200);
    });

}


// 윈도우 로드 시 실행
$(document).ready(function () {
    slideMenu();
});
