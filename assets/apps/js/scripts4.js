
var scroll_handler = function() {

	var html = document.getElementsByTagName("html");
  var vp_start = window.pageYOffset;
  if (vp_start>0) {
      html[0].classList.add("scrolled");
  } else {
      html[0].classList.remove("scrolled");
  }

  checkvisibility("checkvisibility");
  animateScreens();

}



/* функции, срабатывающие при прокрутке */

//параллакс 
var parallaxanimation = function(timestamp) { 
    
        var elems = document.querySelectorAll('.isvisible [data-parallax]');
        var vp_start = window.pageYOffset;
        //console.log(vp_start);
        for (var i = 0; i < elems.length; i++) {
            var delta = parseFloat(elems[i].dataset.parallax);
            var section_offset = parseInt(elems[i].closest('section').getBoundingClientRect().top+vp_start);
            var value = parseInt((vp_start-section_offset) * delta);
            elems[i].children[0].style.transform='translate3d(0,'+value+'px, 0)';
        }
    /*} */
}

//активация блоков по мере прокрутки сайта
var checkvisibility = function(elements) {
    //перебираем каждый из элементов и добавляем ему нужные классы
    elems = document.getElementsByClassName(elements);
    var zapas = window.innerHeight/3;
    var vp_start = 0;//верх вьюпорта
    var vp_end = window.innerHeight;//низ вьюпорта
    for (var i = 0; i < elems.length; i++) {
        var rect = elems[i].getBoundingClientRect();
        //console.log(vp_start,vp_end,elems[i].className,rect);
        elemstart = rect.top-zapas;//верхняя граница блока с учетом запаса
        elemend = rect.bottom+zapas;//нижняя граница блока с учетом запаса
        //elems[i].setAttribute('elemstart',elemstart);
        //elems[i].setAttribute('elemend',elemend);
        //elems[i].setAttribute('vp_start',vp_start);
        //elems[i].setAttribute('vp_end',vp_end);
        if (    (elemstart>vp_start && elemstart<=vp_end) || //верхняя граница блока попадает во вьюпорт
                (elemstart<vp_start && elemend>=vp_end) || //верхняя границы выше вьюпорта, нижняя - ниже
                (elemend>vp_start && elemend<=vp_end) //нижняя граница попадает во вьюпорт
        ) {
            elems[i].classList.add("isvisible");
            elems[i].classList.add("isseen");
        } else {
            elems[i].classList.remove("isvisible");
        }
    }

    if (device.mobile() === false) {//параллакс не нужен на мобильниках
        window.requestAnimationFrame(parallaxanimation);
    }
}

//анимация блоков по мере прокрутки сайта
var animateScreens = function(){
  var elems = document.querySelectorAll('.checkvisibility.isvisible');

  for (var i = 0; i < elems.length; i++) {

    var rect = elems[i].getBoundingClientRect();
    var elemstart = rect.top;
    var elemheight = rect.height;
    var vp_center = window.innerHeight/2; 
    var fillness = parseInt(((vp_center-elemstart)/elemheight) * 100);
    var elem = elems[i];

    if (elem.classList.contains("index_services_block")) {
      if (fillness>-30) {
        elem.classList.add("state1");
        if (!elem.classList.contains("activated")) {
        	var sto = setTimeout(function(){
        		var firstElem = document.querySelectorAll('.index_services_list__item')[0];
        		firstElem.classList.add('active');
        		$(".b",$(firstElem)).slideDown();
        		document.querySelectorAll('.index_services_block')[0].classList.add("activated");
        	},1000);
        }
      } else {
        elems[i].classList.remove("state1");
      }
    } else if (elem.classList.contains("index_number_one")) {
      if (fillness>-20) {
        elem.classList.add("state1");
      } else {
        elems[i].classList.remove("state1");
      }
    } else if (elem.classList.contains("index_cases")) {
      if (fillness>-30) {
        elem.classList.add("state1");
      } else {
        elems[i].classList.remove("state1");
      }
    }

  }
}

window.addEventListener("scroll", scroll_handler, false);
window.addEventListener("touchmove", scroll_handler, false);
window.addEventListener("resize", scroll_handler, false);
window.addEventListener("load", scroll_handler, false);
scroll_handler();


jQuery(window).on("load",function(){
	jQuery("html").addClass("loaded");
})

jQuery(document).ready(function($){



		/* *************** */
		/* common 				 */
		/* *************** */
		$('select').selectric({
			maxHeight: 260,
			arrowButtonMarkup: '<span class="button"><svg><use xlink:href="#angle_arrow2"></use></svg></span>',
		});
		$("input[type='tel']").inputmask({"mask": "+7 (999) 999-99-99"}); //specifying options



		$(document).on("click",".navicon",function(a){
				a.preventDefault();
				if (!$("body").hasClass("nav__active")) {
						$("body").addClass("nav__active");
				} else {
						$("body").removeClass("nav__active");
				}
		}).on("click",".navbar_closearea,.navbar_close",function(a){
				a.preventDefault();
				$("body").removeClass("nav__active");
		}).on("click","html.mobile header .navbar .navbar_body ul li",function(a){
				a.stopPropagation();
				if (!$(this).is(".active")) {
						$(this).siblings("li").removeClass("active");
						$(this).siblings("li").find("li").removeClass("active");
						$(this).addClass("active");
				} else {
						$(this).removeClass("active");
						$(this).find("li").removeClass("active");
				}
		}).on("click","header .navbar .navbar_body ul li a",function(a){
				a.stopPropagation();
		})

		$(document).on("click",".firenavicon",function(a){
				a.preventDefault();
				if (!$("body").hasClass("firenav__active")) {
						$("body").addClass("firenav__active");
				} else {
						$("body").removeClass("firenav__active");
				}
		}).on("click",".firenavbar_closearea,.firenavbar_close",function(a){
				a.preventDefault();
				$("body").removeClass("firenav__active");
		})

		$(document).on("click","header .search a",function(a){
				a.preventDefault();
				if (!$("body").hasClass("search__active")) {
						$("body").addClass("search__active");
				} else {
						$("body").removeClass("search__active");
				}
		}).on("click",".searchbar_closearea,.searchbar_close",function(a){
				a.preventDefault();
				$("body").removeClass("search__active");
		})

		$(document).on("click","html.mobile header nav > li[data-parent]",function(a){
			a.stopPropagation();
			$("html.mobile .navbar").addClass("touch__active").removeAttr("data-touched").attr("data-touched",$(this).attr("class").replace(/active|touched/i,"")).removeAttr("data-level").attr("data-level","1");
			$(this).siblings().removeClass("touched");
			$(this).addClass("touched");
		}).on("click","html.mobile header nav > li > .subnav > ul > li[data-parent]",function(a){
			a.stopPropagation();
			$("html.mobile .navbar").addClass("touch__active").removeAttr("data-touched").attr("data-touched",$(this).attr("class").replace(/active|touched/i,"")).removeAttr("data-level").attr("data-level","2");
			$(this).siblings().removeClass("touched");
			$(this).addClass("touched");
		}).on("click","html.mobile header nav .goback",function(a){
			a.stopPropagation();
			$($(this).parents("li")[0]).removeClass("touched");
			var prevlevel = (parseInt($("html.mobile .navbar").attr("data-level")))-1;
			if (prevlevel>0) {
				$("html.mobile .navbar").attr("data-level",prevlevel);
				if (prevlevel==1) {
					$("html.mobile .navbar").attr("data-touched",$("header nav > li.touched").attr("class").replace(/active|touched/i,""));
				}
				/* дописать правила для 2 3 и т.д. уровней меню, если вложенность меню вырастет */
			} else {
				$("html.mobile .navbar").removeAttr("data-level").removeAttr("data-touched").removeClass("touch__active");
			}
		})



		$(document).on("click","[data-modal]",function(a){
			a.preventDefault();
			console.log($(this));
			dest = $(this).attr("data-modal");
			if ($("#"+dest).length>0) {
				$.fancybox.open({
					src: "#"+dest,
					type: 'inline',
					opts : {
						baseClass : 'sl_popup',
						touch: false,
						afterShow : function( instance, current ) {
							
						}
					}
				})
			}
		})

		$(document).on("click",".scroll_first_block a",function(){
			curSection = $(this).parents("section");
			nextSection = $("+section",curSection);
			if (nextSection.length>0) {
				nextSection_offset = nextSection.offset().top;
				$("html,body").animate({scrollTop:nextSection_offset+"px"},1000);
			}
		});

		var gonext_id = 0;
		$(".gonext_item").each(function(){
			$(this).attr("data-gonext-id",gonext_id);
			gonext_id = gonext_id+1;
		})
		$(document).on("click",".gonext",function(){
			curItem = parseInt($(this).parents(".gonext_item").attr("data-gonext-id"));
			console.log(curItem);
			nextItem = $(".gonext_item[data-gonext-id='"+(curItem+1)+"']");
			console.log(nextItem);
			if (nextItem.length>0) {
				nextItem_offset = nextItem.offset().top;
				$("html,body").animate({scrollTop:nextItem_offset+"px"},1000);
			}
		});

		$(document).on("click","[data-scroll]",function(a){
			a.preventDefault();
			dest = $(this).attr("data-scroll");
			console.log(dest);
			console.log($("."+dest));
			if ($("."+dest).length>0) {
				dest_offset = $("."+dest).offset().top;
				$("html,body").animate({scrollTop:dest_offset+"px"},1000);
			}
		})

		$(document).on("click","[data-expand]",function(){
			var expandable_content = $(this).attr("data-expand");
			if ($("."+expandable_content).length>0) {
				$("."+expandable_content).show();
				$(this).hide();
			}
		})
		$(document).on("click","[data-collapse]",function(){
			var expandable_content = $(this).attr("data-collapse");
			if ($("."+expandable_content).length>0) {
				$("."+expandable_content).hide();
				$("[data-expand='"+expandable_content+"']").show();
			}
		})




		/* accordeon */
		$(document).on("click",".accordeonItem",function(){
			var accordeon = $(this).parents(".accordeon");
			if (!$(this).is(".active")) {
				$(this).addClass("active");
				$(".b",this).slideDown();
			} else {
				$(this).removeClass("active");
				$(".b",this).slideUp();
			}
		}).on("click",".accordeonItem a",function(a){
			a.stopPropagation();
		})










		function checkPattern(element) {
		    var elem = element;
		    var pattern = $("input",elem).attr("pattern");
		    if (pattern.length>0) {
		    	var re = new RegExp(pattern);
		    	return re.test($("input",elem).val());
		    } else {
		    	return true;
		    }
		}
		$(document).on("submit","form.sl_stdform",function(a){
			form = $(this);

			required_inputs = $("input[required]",form).parents(".sl_input");

			var form_status = true;

			required_inputs.each(function(index,obj){
				console.log(index,obj);
				var input_status = true;
				if ($("input",obj).attr("pattern")!==undefined && $("input",obj).attr("pattern").length>0) {
					input_status = checkPattern($(obj));
					if (input_status!==true) {
						form_status = input_status;
					}
				} else {
					if ($("input",obj).val().length==0) {
						input_status = false;
						form_status = input_status;
					}
				}
				if (input_status==true) {
					$(obj).removeClass("sl_response__error");
					$(obj).addClass("sl_response__success");
					$(".sl_response_icon svg use",obj).attr("xlink:href","#success");
				} else {
					$(obj).removeClass("sl_response__success");
					$(obj).addClass("sl_response__error");
					$(".sl_response_icon svg use",obj).attr("xlink:href","#error");
				}
				console.log(form_status);
			})

			submit_input = $(".sl_submit_input",form);
			if (form_status==true) {
				form.removeClass("sl_response__error");
				form.addClass("sl_response__success");
				$("[type='submit'] svg use",form).attr("xlink:href","#success");
				$(".sl_response_holder .sl_response_icon svg use",form).attr("xlink:href","#success");
				$(".sl_response_holder .sl_response_text",form).html("").removeClass("sl_response__error");
				fbq("track", "Lead");
				return true;
			} else {
				form.removeClass("sl_response__success");
				form.addClass("sl_response__error");
				$("[type='submit'] svg use",form).attr("xlink:href","#error");
				$(".sl_response_holder .sl_response_icon svg use",form).attr("xlink:href","#error");
				$(".sl_response_holder .sl_response_text",form).html("Не корректный ввод данных").addClass("sl_response__error");
				return false;
			}

			console.log(form_status);

		})


    //fancybox Для изображений
    $("[data-fancybox]").fancybox({

        modal : false,// Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc        
        loop : true, // Enable infinite gallery navigation
        margin : [44, 0], // Space around image, ignored if zoomed-in or viewport smaller than 800px
        arrows : true,// Should display navigation arrows at the screen edges
        infobar : false,// Should display infobar (counter and arrows at the top)
        toolbar : true,// Should display toolbar (buttons at the top)
        buttons : [// What buttons should appear in the top right corner.
            'close'
        ],
        smallBtn : 'auto',// Should display buttons at top right corner of the content. If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
        protect : false,// Disable right-click and use simple image protection for images
        animationEffect : "zoom", //false,  "zoom" , "fade", "zoom-in-out"
        transitionEffect : "slide", //false,"fade',"slide',"circular',"tube',"zoom-in-out',"rotate'
        autoFocus : false,
        backFocus : true,
        trapFocus : true,
        hash : false, //false (off), null (on)
    });



		/* *************** */
		/* special 				 */
		/* *************** */

		/* index */

		$(document).on("click",".index_services_list__item .h a",function(){
				var slide = $(this).parents(".index_services_list__item");
				if (slide.is(".active")) {
						$(".b",slide).slideUp();
						slide.removeClass("active");
				} else {
						$(".index_services_list__item .b").slideUp();
						$(".index_services_list__item").removeClass("active");
						$(".b",slide).slideDown();
						slide.addClass("active");
				}
		})

		if (device.desktop() === true) {
			if ($(".wwu_list__wrapper:not(.prepend):not(.append)").length>0) {
				$(".wwu_list__wrapper:not(.prepend):not(.append)").clone().addClass("prepend").prependTo(".wwu_list__pane");
				$(".wwu_list__wrapper:not(.prepend):not(.append)").clone().addClass("append").appendTo(".wwu_list__pane");
				$(window).on("load resize",function(){
					var loop_width = $(".wwu_list__wrapper").width();
					$(".wwu_list__pane").width(loop_width*3+"px");
				});
			}
		}

		if (device.desktop() === false) {
			$(document).on("click",".index_number_one__tiles h3",function(){
				if ($(this).parent().is(".active")) {
					$("+*",this).slideUp();
					$(this).parent().removeClass("active");
				} else {
					$(".index_number_one__tiles h3 + *").slideUp();
					$(".index_number_one__tiles > *").removeClass("active");
					$("+*",this).slideDown();
					$(this).parent().addClass("active");
				}
			})
		}

		$('.index_reviews__slider').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: true,
				autoplaySpeed: 10000,
				pauseOnHover: true,
				pauseOnFocus: false,
				pauseOnDotsHover: false,
				dots: false,
				fade: false,
				prevArrow: $(".index_reviews__slider__arrow_prev"),
				nextArrow: $(".index_reviews__slider__arrow_next"),	
			  responsive: [
			    {
			      breakpoint: 750,
			      settings: {
			        slidesToShow: 1,
			        adaptiveHeight: true,
			        infinite: false,
			        autoplay: false,
							pauseOnFocus: true,
			      }
			    },
			  ]
		});
		$('.index_reviews__slider').on("mouseenter",function(){
			$(this).addClass("paused");
		}).on("mouseleave",function(){
			$(this).removeClass("paused");
		})
		$('.index_reviews__slider').on("beforeChange",function(a,b,c,d) {
			//var currentSlideID = $("[data-slick-index='"+c+"']",this).attr("data-id");
			//$(".index_reviews__desktop_card[data-id='"+currentSlideID+"']").removeClass("active");
		}).on("afterChange",function(a,b,c) {
			var currentSlideID = $("[data-slick-index='"+c+"'] .index_reviews__slider_item",this).attr("data-id");
			$(".index_reviews__desktop_card").removeClass("active");
			$(".index_reviews__desktop_card[data-id='"+currentSlideID+"']").addClass("active");
			$(".index_reviews__slider__paging .cur").html((c+1));
		}).on("reInit",function(a,b,c,d) {
			console.log(a,b,c,d);
		})

		/* franchise */

		$(document).on("change",".franchise__form__slide input[type='radio'],.franchise__form__slide input[type='checkbox']",function(a) {
			var slide = $(this).parents(".franchise__form__slide");
			var slide_id = parseInt(slide.attr("data-slide"));
			if ($("input:checked",slide).length>0) {
				$("a.stdbut",slide).removeClass("disabled");
			} else {
				$("a.stdbut",slide).addClass("disabled");}
		}).on("click",".franchise__form__slide a.stdbut:not(.disabled)",function(a){
			var slide = $(this).parents(".franchise__form__slide");
			var slide_id = parseInt(slide.attr("data-slide"));
			slide.removeAttr("active");
			slide.addClass("passed");
			nextslide = slide_id + 1;
			$(".franchise__form__slide[data-slide='"+nextslide+"']").addClass("active");
		});

		/* timeline */

		$('.company_timeline__slider').slick({
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
				arrows: false,
				//nextArrow: $(".index_announces_slider__arrow"),
		});

		/* partners_slider */

		$('.partners_slider').slick({
				infinite: false,
				slidesToShow: 6,
				slidesToScroll: 3,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
				arrows: false,
				//nextArrow: $(".index_announces_slider__arrow"),
		});

		/* vacancies */

		$(document).on("click",".vacancies_list__item > .l",function(a){
			vacancy_id = $(this).parents(".vacancies_list__item").attr("data-id");
			if ($(".vacancies_list__item[data-id='"+vacancy_id+"']").hasClass("active")) {
				$(".vacancies_list__item[data-id='"+vacancy_id+"']").removeClass("active");
				if ($(".vacancies_list__item[data-id='"+vacancy_id+"'] > .v").length>0) {
					$(".vacancies_list__item[data-id='"+vacancy_id+"'] > .v").slideUp();
				}
			} else {
				$(".vacancies_list__item").removeClass("active");
				$(".vacancies_list__item > .v").slideUp();
				$(".vacancies_list__item[data-id='"+vacancy_id+"']").addClass("active");
				if ($(".vacancies_list__item[data-id='"+vacancy_id+"'] > .v").length>0) {
					$(".vacancies_list__item[data-id='"+vacancy_id+"'] > .v").slideDown(500,function(){
						offset_top = $(".vacancies_list__item[data-id='"+vacancy_id+"']:visible").offset().top;
						if (offset_top<$(window).scrollTop() || offset_top>($(window).scrollTop()+$(window).height())) {
							$("html,body").animate({scrollTop:offset_top+"px"},500);
						}
					});
				}
				//sto = setTimeout(function() {
				//	if ($(window).width()<768) {
				//		offset = $(".orm_vacancy.active").offset().top-$("header").height();
				//		$("html").animate({
				//			scrollTop: offset+"px"
				//		},500);
				//	}
				//},200);
			}
		})
		if ($("html.desktop .vacancies_list__item").length>0) {
			vacancy_id = $(".vacancies_list__item:eq(0)").attr("data-id");
			$(".vacancies_list__item[data-id='"+vacancy_id+"']").addClass("active");
			$(".vacancies_list__item[data-id='"+vacancy_id+"'] > .v").css("display","block");
		}

		/* company_benefits */

		$('.company_benefits__slider').slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
				prevArrow: $(".company_benefits__slider__arrow_prev"),
				nextArrow: $(".company_benefits__slider__arrow_next"),	
			  responsive: [
			    {
			      breakpoint: 750,
			      settings: {
			        slidesToShow: 1,
			        rows: 2,
			        adaptiveHeight: true
			      }
			    },
			  ]
		});

		/* faq */

		$(document).on("click",".faq__item > .l",function(a){
			vacancy_id = $(this).parents(".faq__item").attr("data-id");
			if ($(".faq__item[data-id='"+vacancy_id+"']").hasClass("active")) {
				$(".faq__item[data-id='"+vacancy_id+"']").removeClass("active");
				if ($(".faq__item[data-id='"+vacancy_id+"'] > .v").length>0) {
					$(".faq__item[data-id='"+vacancy_id+"'] > .v").slideUp();
				}
			} else {
				$(".faq__item").removeClass("active");
				$(".faq__item > .v").slideUp();
				$(".faq__item[data-id='"+vacancy_id+"']").addClass("active");
				if ($(".faq__item[data-id='"+vacancy_id+"'] > .v").length>0) {
					$(".faq__item[data-id='"+vacancy_id+"'] > .v").slideDown(500,function(){
						offset_top = $(".faq__item[data-id='"+vacancy_id+"']:visible").offset().top;
						if (offset_top<$(window).scrollTop() || offset_top>($(window).scrollTop()+$(window).height())) {
							$("html,body").animate({scrollTop:offset_top+"px"},500);
						}
					});
				}
			}
		})
		if ($("html.desktop .faq__item").length>0) {
			vacancy_id = $(".faq__item:eq(0)").attr("data-id");
			$(".faq__item[data-id='"+vacancy_id+"']").addClass("active");
			$(".faq__item[data-id='"+vacancy_id+"'] > .v").css("display","block");
		}

		/* blog */
		//функция распределяет загруженные статьи по колонкам в десктопной версии
		var blog_items_to_columns = function() {
			if ($(window).width() >= 750) {
				var list_wrapper = $(".blog_list");
				var columns_wrapper = $(".blog_desktop_columns");
				if ($(".blog_list_item",list_wrapper).length>0) {
					$.each($(".blog_list_item",list_wrapper),function(index,value) {
						var column_id = (index%3)+1;
						$(".blog_desktop_column:nth-child("+column_id+")",columns_wrapper).append(value.outerHTML);
					});
				}
				list_wrapper.empty();
			}
		}
		blog_items_to_columns();
		window.addEventListener("load", blog_items_to_columns, false);


		/* contacts */
		$(document).on("click",".contacts__address",function(){
			if ($(this).is(".active")) {
				$(this).removeClass("active");
				$(".b",this).hide();
			} else {
				$(".contacts__address").removeClass("active");
				$(".contacts__addresses .b").hide();
				$(this).addClass("active");
				$(".b",this).slideDown();
			}
		})

		/* sitetypes on mobile */
		$(document).on("click","html.mobile .sitetype",function(){
			if (!$(this).is(".active")) {
				$(this).addClass("active");
				$(".sitetype__body",this).slideDown();
			} else {
				$(this).removeClass("active");
				$(".sitetype__body",this).slideUp();
			}
		}).on("click",".sitetype a",function(a){
			a.stopPropagation();
		})

		/* tp axiomas on mobile */
		$(document).on("click","html.mobile .tp_axiomaItem > .h",function(){
			var tp_axiomaItem = $(this).parents(".tp_axiomaItem");
			if (!tp_axiomaItem.is(".active")) {
				tp_axiomaItem.addClass("active");
				$("> .b",tp_axiomaItem).slideDown();
			} else {
				tp_axiomaItem.removeClass("active");
				$("> .b",tp_axiomaItem).slideUp();
			}
		})

		/* tp (tehpodderzhka on mobile) */
		$(document).on("click",".tp_tile_header_wrapper",function(){
			var tp_tile = $(this).parents(".tp_tile");
			if (!tp_tile.is(".active")) {
				tp_tile.addClass("active");
				$(".tp_tile_body",tp_tile).slideDown();
			} else {
				tp_tile.removeClass("active");
				$(".tp_tile_body",tp_tile).slideUp();
			}
		})

		/* seo_audit steps */
		$(document).on("click",".seoaudit_stepItem_header span",function(){
			var tp_tile = $(this).parents(".seoaudit_stepItem");
			if (!tp_tile.is(".active")) {
				tp_tile.siblings(".seoaudit_stepItem").each(function(){
					$(this).removeClass("active");
					$(".seoaudit_stepItem_body",this).slideUp();
				})
				tp_tile.addClass("active");
				$(".seoaudit_stepItem_body",tp_tile).slideDown();
			} else {
				tp_tile.removeClass("active");
				$(".seoaudit_stepItem_body",tp_tile).slideUp();
			}
		})

		/* firmstyle_includes */
		$('.firmstyle_includes__slider').slick({
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
				prevArrow: $(".firmstyle_includes__slider__arrow_prev"),
				nextArrow: $(".firmstyle_includes__slider__arrow_next"),	
			  responsive: [
			    {
			      breakpoint: 750,
			      settings: {
			        slidesToShow: 1,
			        rows: 2,
			        adaptiveHeight: true
			      }
			    },
			  ]
		});

		/* company leader includes */
		$('.leader_videos__slider').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
				prevArrow: $(".leader_videos__slider__arrow_prev"),
				nextArrow: $(".leader_videos__slider__arrow_next"),	
		});
		$(document).on("click",".leader_timeline__show_collapsed",function(){
			$(this).siblings(".collapsed").show();
			$(this).hide();
		})






		/* ruward */
		$(document).on("click",".ruward_info .i",function(){
			var ruward_info = $(".ruward_info");
			if (ruward_info.hasClass("active")) {
				ruward_info.removeClass("active");
			} else {
				ruward_info.addClass("active");
			}
		})



		/* portfolio */
		$(document).on("click",".portfolio_tabs a",function(){
			var a = $(this);
			var pane = $(".portfolio_pane");
			var filter_val = a.attr("data-filter");
			a.siblings().removeClass("active");
			a.addClass("active");
			$("[data-filter]:not([data-filter~='"+filter_val+"'])",pane).hide();
			$("[data-filter~='"+filter_val+"']",pane).stop().show();
		})

		/* company_benefits */

		$('.portfolio_clients.mobile_only').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				autoplay: false,
				dots: false,
				fade: false,
        rows: 3,
				prevArrow: $(".portfolio_clients__arrow_prev"),
				nextArrow: $(".portfolio_clients__arrow_next"),	
		});

});

   //START SLIDER ON SIDORIN-PAGE

   let left = 0,
      leftState = 0,
      maxSize = 0;


   if (window.innerWidth <= 420) {
      console.log(window.innerWidth);
      left = 110;
      leftState = 110;
      maxSize = 220;
   } else {
      console.log(window.innerWidth + ' ' + 2);
      left = 400;
      leftState = 400;
      maxSize = 800;
   }


   console.log(left, leftState, maxSize);

   let counterSlider = 6;
   $("#slide-2007").css("background-image", "none");
   $("#slide-2008").css("background-image", "none");

   $(".ui-slider-handle").click(function () {
      if (left > maxSize) {
         left = leftState;
      }
      if (counterSlider >= 6 && counterSlider < 8) {
         let slide = `#slide-200${counterSlider}`;
         $(slide).css("background-image", "none");
         $(slide + '> .block-description > p').css("color", "black");
         $(slide + '> .block-description > span').css("color", "black");
         let nextSlide = `#slide-200${++counterSlider}`;
         $(".ui-state-default").animate({
            left: left
         }, 400);
         left = left + leftState;
         $(nextSlide).css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");

         $(nextSlide + '> .block-description > span').css("color", "red");
         $(nextSlide + '> .block-description > p').css("color", "red");

      } else {
         let slide = `#slide-200${counterSlider}`;
         $(slide).css("background-image", "none");
         $(slide + '> .block-description > p').css("color", "black");
         $(slide + '> .block-description > span').css("color", "black");
         counterSlider = 6;
         slide = `#slide-200${counterSlider}`;
         $(".ui-state-default").animate({
            left: 0
         }, 400);
         $(slide).css("background-image", "linear-gradient(to top, #1d1d1dbd, #00000083), url(../img/2.png)");

         $(slide + '> .block-description > span').css("color", "red");
         $(slide + '> .block-description > p').css("color", "red");
      }
   });


   //END SLIDER ON SIDORIN-PAGE
