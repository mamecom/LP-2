// ハンバーガーメニュー
const nav = document.querySelector("#navArea");
const btn = document.querySelector(".toggle-btn");
const mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

// スムーススクロール
const headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function() {
    const href= $(this).attr("href");
    const target = $(href);
    const position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 300);   
    nav.classList.toggle("open");
    return false;
});

// slick実装
$(function() {
	$('.slider').slick({
		centerMode: true, //センターモード
		centerPadding: '100px', //前後のパディング
		autoplay: false, //オートプレイ
    arrows: false,  // 左右の次へ、前へボタンを表示する
		// autoplaySpeed: 2000, //オートプレイの切り替わり時間
		slidesToShow: 3, 
		responsive: [{
			breakpoint: 601,
			settings: {
				arrows: false, // 前後の矢印非表示
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 1
			}
		}]
	});
});

$(function() {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
          $(this).addClass("is-fadein");
        }
    });
  });
});
