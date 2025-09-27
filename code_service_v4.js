$(document).ready(function() {
  // .open-window 클래스를 가진 요소를 클릭하면 새 창을 엽니다.
  $('.gov').on('click', function(e) {
    e.preventDefault();
    const url = $(this).attr('href') || $(this).data('url') || 'https://exo.infowebox.com/%ec%a0%95%eb%b6%8024-%ec%84%9c%eb%b9%84%ec%8a%a4-%ec%9d%bc%ec%8b%9c-%ec%a4%91%eb%8b%a8-%eb%8b%b9%ed%99%a9%ed%95%98%ec%a7%80-%eb%a7%88%ec%84%b8%ec%9a%94-%eb%8c%80%ec%b2%b4-%ec%b0%bd%ea%b5%ac/';
    window.location.href = url;
  });
});
