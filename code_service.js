$(document).ready(function() {
  // .open-window 클래스를 가진 요소를 클릭하면 새 창을 엽니다.
  $('.hometax').on('click', function(e) {
    e.preventDefault();
    const url = $(this).attr('href') || $(this).data('url') || 'www.hometax.go.kr';
    window.open(url, '_blank', 'width=800,height=600');
  });
});