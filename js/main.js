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
let headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function() {
    let href= $(this).attr("href");
    let target = $(href);
    let position = target.offset().top - headerHeight;
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

// $(function() {
//   $(window).scroll(function () {
//     const windowHeight = $(window).height();
//     const scroll = $(window).scrollTop();
//     let buffer;
//     if ($(window).width() > 768) {
//       buffer = 300;
//     } else {
//       buffer = 100;
//     }

//     $('.fadein').each(function () {
//       const targetPosition = $(this).offset().top;
//       if (scroll > targetPosition - windowHeight + 100) {
//         $(this).addClass("is-fadein");
//       }
//     });
//   });
// });
$(function() {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      let targetElement = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
          $(this).addClass("is-fadein");
        }
    });
  });
});
