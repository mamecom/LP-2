// ハンバーガーメニュー
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
};

// スムーススクロール
var headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
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
			breakpoint: 768,
			settings: {
				arrows: false, // 前後の矢印非表示
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}]
	});
});