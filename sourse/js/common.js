const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			backFocus: false,
			autoFocus: false,
			beforeLoad: function () {
			
			},
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".fancybox-close-small, .modal-close-js").click(function () {
			$(".fancybox-container ").removeClass('fancybox-is-open');
			instance.close();
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	// objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/7.jpg);"></div>')
	// /добавляет подложку для pixel perfect
 
	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").height();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();
 
	let defaultSl = {
		
	}
	const swiperH = new Swiper('.headerBlock__slider--js', {
		// slidesPerView: 5,
		
		slidesPerView: 'auto',
		spaceBetween: 20,
		freeMode: true, 
		watchOverflow: true,
		autoplay: {
			delay: 10,
			// waitForTransition: false,
		},
		speed: 10000,
		loop: true,
		breakpoints: {
			992: {
				loop: false,
				speed: 400,
				autoplay: {
					delay: 0,
				},
			}
		},
		lazy: {
			loadPrevNext: true,
			// loadPrevNextAmount: 12,
		},

	});

	// modal window
 

	$(".custom-select-js").chosen({
		html_template: '<span class="option-row"><span class="option-img-wrap"><img  class="{class_name}" src="{url}" /></span><span class="option-text">{text}</span></span> ',
		display_selected_options: false
	});
	let partical = {
		el1: 'particles-js',
		el2: 'particles2-js',
		el3: 'particles3-js', 
		el4: 'particles4-js',
	}
	if (partical.el1) particlesJS.load(partical.el1, 'js/particles.json' );
	if (partical.el2) particlesJS.load(partical.el2, 'js/particles.json' );
	if (partical.el3) particlesJS.load(partical.el3, 'js/particles.json' );
	if (partical.el4) particlesJS.load(partical.el4, 'js/particles.json' );
		 



	const sWorkingSwiper = new Swiper('.sWorkingPrinciple__slider--js', {
		// slidesPerView: 5,

		slidesPerView: 1,
		spaceBetween: 0,  
		loop: true, 
		lazy: {
			loadPrevNext: true,
			// loadPrevNextAmount: 12,
		},
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	$(".headerBlock__scroll-down").click(function () {
		const elementClick = $('.headerBlock').next();
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	var btnTop = document.querySelector('.btn-scroll-top--js');
	if (btnTop) {
		btnTop.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior:'smooth' })
		})
	}

		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

		}

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});



	const swiperGal = new Swiper('.gal-slider--js', {
		// slidesPerView: 5,

		slidesPerView: 1,
		spaceBetween: 30, 
		watchOverflow: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	};
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
