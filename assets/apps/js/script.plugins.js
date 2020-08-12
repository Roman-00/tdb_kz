

	$(document).ready(function(){

		/* ------------------------------------------------
				Textillate
		------------------------------------------------ */

		if($('.title_effect').length){ 

			if($(window).width() > 1199) {

			 	$(".title_effect").textillate({
			
					selector:'.texts',
					//loop:true,
					minDisplayTime:30,
					autoStart:false,
					
					in: {
						effect:'flipInY',
						// delayScale:0.3,
						delay:30
						//sync:true,
						//shuffle:true
						//reverse:true
					},
				});

		 	}

		}


        /* ------------------------------------------------
				End of Textillate
		------------------------------------------------ */

		/* ------------------------------------------------
				Pagepiling
		------------------------------------------------ */

		if($('#fullpage').length){


			if($(window).width() > 1199) {
			 	$('#fullpage').fullpage({
					// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
					//  anchors: ['start-info', 'about-info', 'service-info', 'actual-info', 'contact-info'],
					// menu: '#menu',
					navigationTooltips: ['Главная', 
															'Статистика', 
															'О компании', 
															'Когда нужны услуги', 
															'Мы предлагаем - наши услуги', 
															'Почему мы', 
															'Стоимость', 
															'3 причины удалить', 
															'Клиенты', 
															'Кейсы', 
															'Наша команда', 
															'Отзывы',
															'Контакты'],
					showActiveTooltip: false,
					navigation: true,
					scrollingSpeed: 800,
					afterLoad: function(origin, destination, direction){
						setTimeout(function() {
							$('.count.full').spincrement({
								from: 1,
								duration: 4000,
							});
							
							// $(".title_effect").textillate('in');
							// $(".title_effect_medium").textillate('in');				   
						},1100);
						
						if($('#fp-nav')) {
							let fullpageOpenMenuBtn = $('#fullpage_menu_btn');
							let fullpageNavBlock = $('#fp-nav');
							
							$( fullpageNavBlock ).prepend( fullpageOpenMenuBtn );
							
							if($(fullpageOpenMenuBtn)) {
								$( fullpageOpenMenuBtn ).on('click', function () {
									$.fn.fullpage.moveTo('slide_0', 1);
								});
							}
						}
					},
					
					onLeave: function(origin, destination, direction) {
						let fullpageOpenMenuBtn = $('#fullpage_menu_btn');
						
						if (origin == 1 && direction =='down') {
							$( fullpageOpenMenuBtn ).fadeIn();
							//$('#back-to-top').fadeIn();
						} else if (origin == 2 && direction == 'up') {
							$( fullpageOpenMenuBtn ).fadeOut();
							//$('#back-to-top').fadeOut();
						}
					}
				});
			}
			// if($(window).width() < 1199) {

			// 	$.fn.fullpage.destroy();

			// }

		}



        /* ------------------------------------------------
				End of Pagepiling
		------------------------------------------------ */

		/* ------------------------------------------------
				Swiper
		------------------------------------------------ */

		if($('.swiper-1').length){ 

			var mySwiper = new Swiper ('.swiper-1', {
			    // Optional parameters
			    // direction: 'vertical',
			    loop: true,
			    speed: 600,
			    effect: 'fade',
		         // autoHeight: true,

			    // parallax: true,

			    autoplay: {
			        delay: 5000,
			        disableOnInteraction: false,
			      },
			    

			    // If we need pagination
			    pagination: {
			      el: '.swiper-pagination',
			      clickable: true,
			    },

			    // Navigation arrows
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },
			    breakpoints: {
			        640: {
			          autoHeight: true,
			        },
			        1200: {
			          autoHeight: true,
			        },
		        },


			    on: {
			        slideChange: function () {
			          // if (!this.params.debugger) return;
			          // console.log('init');

			          if($(window).width() > 1199) {

							$(".swiper-1 .animated_slow").removeClass("visible").addClass("transparent").removeClass("fadeInUp");

					        setTimeout(function(){
					          	$(".swiper-1 .swiper-slide-active .animated_slow").removeClass("transparent").addClass("visible").addClass("fadeInUp");
					        },100);

					        $(".swiper-1 .animated_img").removeClass("visible").addClass("transparent").removeClass("slideInUp");

					        setTimeout(function(){
					          	$(".swiper-1 .swiper-slide-active .animated_img").removeClass("transparent").addClass("visible").addClass("slideInUp");
					        },100);

						}
						else {

							$(".swiper-1 .animated").removeClass("transparent").addClass("visible");

						}

			          

					    

					    
			          
			        },
		        },


			    // And if we need scrollbar
			    // scrollbar: {
			    //   el: '.swiper-scrollbar',
			    // },
			})

		}
		if($('.swiper-2').length){ 

			var mySwiper = new Swiper ('.swiper-2', {
			    // Optional parameters
			    // direction: 'vertical',
			    loop: false,
			    

			    // Navigation arrows
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },


			})

		}

		if($('.swiper-3').length){ 

			var mySwiper = new Swiper ('.swiper-3', {
			    // Optional parameters
			    // direction: 'vertical',
			    loop: false,
			    // autoHeight: true,
			    

			    // Navigation arrows
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },

			    breakpoints: {
		        640: {
		          autoHeight: true,
		        },
		        1200: {
		          autoHeight: true,
		        },
		      }


			})

		}

		if($('.swiper-4').length){ 

			var swiper = new Swiper('.swiper-4', {
				slidesPerView: 4,
				spaceBetween: 0,
				freeMode: true,
				// centeredSlides: true,
		      scrollbar: {
		        el: '.swiper-scrollbar',
		        hide: true,
		        draggable: true,
		        dragSize: 64,
		      },
		      breakpoints: {
		        640: {
		          slidesPerView: 2,
		          spaceBetween: 0,
		          scrollbar: {
			        dragSize: 48,
			      },
		        },
		        768: {
		          slidesPerView: 2,
		          spaceBetween: 0,
		          scrollbar: {
			        dragSize: 48,
			      },
		        },
		        1200: {
		          slidesPerView: 3,
		          spaceBetween: 0,
		          scrollbar: {
			        dragSize: 48,
			      },
		        },
		        1600: {
		          scrollbar: {
			        dragSize: 48,
			      },
		        },
		      }
		    });
		    // swiper.slideTo(2, 0);

		}


        /* ------------------------------------------------
				End of Swiper
		------------------------------------------------ */

		/* ------------------------------------------------
			Arcticmodal
		------------------------------------------------ */

		$(".modal_btn").on("click",function(event){

            event.preventDefault();

            var id = $(this).attr("data-modal"),
                src = $(this).attr("data-src");

            $('#'+id).arcticmodal({
                
                beforeOpen : function(){

                    $('#'+id).find("iframe").attr("src", src+"?wmode=transparent");

                }

            });

        });



	    /* ------------------------------------------------
				End of Arcticmodal
		------------------------------------------------ */

		/* ------------------------------------------------
			Tab
		------------------------------------------------ */
		if($('.vertical_tab').length){ 

			$('.vertical_tab').easyResponsiveTabs({
	            type: 'vertical',
	            width: 'auto',
	            fit: true,
	            tabidentify: 'ver_1', // The tab groups identifier
	            activetab_bg: '#fff', // background color for active tabs in this group
	            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
	            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
	            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
	        });

		}

	    /* ------------------------------------------------
				End of Tab
		------------------------------------------------ */
		
		/* ------------------------------------------------
			Back to top
		------------------------------------------------ */
		if($('#back-to-top').length) {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 50) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('#back-to-top').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		/* ------------------------------------------------
			END Back to top
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				Textillate
		------------------------------------------------ */
		if($('.title_effect_main').length){ 

			if($(window).width() > 1199) {

			 	$(".title_effect_main").textillate({
			
					selector:'.texts_main',
					//loop:true,
					minDisplayTime:30,
					autoStart:true,
					
					in: {
						effect:'flipInY',
						//delayScale:0.1
						delay:30
						//sync:true,
						//shuffle:true
						//reverse:true
					},
				});

		 	}

		}


        /* ------------------------------------------------
				End of Textillate
		------------------------------------------------ */

		/* ------------------------------------------------
                validateform  
        ------------------------------------------------ */

        if($('.validateform_universal').length){

            $(".validateform_universal").each(function(index,el){
                var id = $(el).attr("id");

                $("#" + id).validate({

                    rules:{

                        name:{
                            required: true,
                        },
                        phone:{
                            required: true,
                        },

                        email:{
                            required: true,
                            email: true
                        },
                        checkbox:{
                            required: true,
                        },

                   },

                   messages:{

                        name:{
                            required: "Это обязательное поле",
                        },
                        phone:{
                            required: "Это обязательное поле",
                        },

                        email:{
                            required: "Это обязательное поле",
                            email: "Неправильно введен адрес",
                        },
                        checkbox:{
                            required: "Дайте согласие",
                        },

                   },
                   
                });
            });
        }


/* ------------------------------------------------
                End of validateform
        ------------------------------------------------ */


	});

	$( window ).resize(function() {

		/* ------------------------------------------------
				Pagepiling
		------------------------------------------------ */

		// if($(window).width() < 1200) {

		// 	$.fn.fullpage.destroy('all');

		// }

		/* ------------------------------------------------
				End of Pagepiling
		------------------------------------------------ */

    });
