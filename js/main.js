window.addEventListener('DOMContentLoaded', () => {

	$(function () {
		//icon search
		$("#search").click(function () {
			$(".menu-item").addClass('hide-item');
			$(".header__search-form").addClass('active');
			$(".close").addClass('active');
			$("#search").hide();
		});
		$(".close").click(function () {
			$(".menu-item").removeClass('hide-item');
			$(".header__search-form").removeClass('active');
			$(".close").removeClass('active');
			$("#search").show();
		});

		//Slicky scroll header
		window.addEventListener("scroll", function () {
			const headerMenu = document.querySelector(".header-menu"),
					headerForm = document.querySelector(".header__search-form");
			headerMenu.classList.toggle("sticky", window.scrollY > 0);
			headerForm.classList.toggle("toggle", window.scrollY > 0);
		});
	});

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//tabs section products
	const tabs = document.querySelectorAll('.products__tabs-btn'),
			tabsContent = document.querySelectorAll('.products__content'),
			tabsParent = document.querySelector('.products__tabs');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('products__content');
			item.classList.remove('active', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('active', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('products__tabs-btn')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//hamburger
	const hamburger = document.querySelector('.hamburger'),
			navMenu = document.querySelector('.nav__menu'),
			menuItem = document.querySelector('.menu-item'),
			navLink = document.querySelectorAll('.nav__link');
	
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navMenu.classList.toggle('active');
		menuItem.classList.toggle('active');
	});

	navLink.forEach(n => n.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
		menuItem.classList.remove('active');
	}));

});

//form
jQuery(document).ready(function () {

	jQuery('form button').click( function() {
		var form = jQuery(this).closest('form');

		if ( form.valid() ) {
			form.css('opacity','.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function(data) {
					form.html(data);
					form.css('opacity','1');
						form.find('.status').html('форма отправлена успешно');
						//$('#myModal').modal('show') // для бутстрапа
				},
				error:	 function() {
					form.find('.status').html('серверная ошибка');
				}
			});
		}
	});

});