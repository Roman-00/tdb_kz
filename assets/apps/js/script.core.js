;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			self.inputPlaceholder();
			self.accordion();
			self.btnLink();
			self.search();
			self.nav();
			self.overlay();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			self.footerHeight.init();
			self.animatedContent();

		},

		/**
        **  overlay
        **/
	    overlay: function(){

	      $(".form_pos").hover(function(){
	        $('.form_overlay').toggleClass("active");
	      });

	    },

		/**
        **  nav
        **/
	    nav: function(){

	      $(".btn_nav_open").on("click", function(){
	        $('.nav_box').addClass("active");
	      });
	      $(".btn_close_nav").on("click", function(){
	        $('.nav_box').removeClass("active");
	      });

	    },

		/**
        **  Search
        **/
	    search: function(){

	      $(".search_btn_open").on("click", function(){
	        $(this).addClass("active").next(".searchbar_body").slideToggle("medium");
	      });
	      $(".btn_close_search").on("click", function(){
	        $('.search_btn_open').removeClass("active").next(".searchbar_body").slideToggle("medium");
	      });

	    },

		btnLink :function(){

            function simple_link(target_items, name){
                $(target_items).each(function(i){
                $("body").append("<div class='"+name+"' id='"+name+i+"'></div>");
                var my_tooltip = $("#"+name+i);

                $(this).removeAttr("title").mouseover(function(){
                my_tooltip.css({opacity:1, display:"none"}).stop().fadeIn(400);
                }).mousemove(function(kmouse){
                my_tooltip.css({left:kmouse.pageX-5, top:kmouse.pageY-80});
                }).mouseout(function(){
                my_tooltip.stop().fadeOut(400);
                });
                });
                }
                $(document).ready(function(){
                simple_link(".btn-link","btn-link-arrow");
                });

        },

		/**
        **  Accordion
        **/
	    accordion: function(){

	      $(".accordion-item > a").on("click", function(){
	        if($(this).hasClass('active')){
	          $(this).removeClass("active");
	          $(this).parents('.accordion-item').removeClass("active");
	          $(this).siblings('.accordion-content').fadeOut(200);
	          //$(".accordion-item > a i").removeClass("fa-minus").addClass("fa-plus");
	        }else{
	          //$(".accordion-item > a i").removeClass("fa-minus").addClass("fa-plus");
	          //$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	          $(".accordion-item > a").removeClass("active");
	          $(this).addClass("active");
	          $(this).parents('.accordion-item').addClass("active");
	          $('.accordion-content').fadeOut(200);
	          $(this).siblings('.accordion-content').fadeIn(200);
	        }
	      });

	    },

		/**
        **  Input Placeholder
        **/

        inputPlaceholder: function(){

        	$("input").on('mouseleave mousemove', function(e){
			    if($(this).val()!='') {
			    	$(this).addClass('notempty');
			    } else {
			    	$(this).removeClass('notempty');
			    }
			});
			// $("placeholder_txt").on('click', function(e){
			//     $(this).addClass("active");
			// });

        },

		animatedContent : function(){

			$("[data-animation]").each(function() {

				var $this = $(this);

				if($(window).width() > 1199) {

					$this.appear(function() {

						var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

						if(delay > 1) $this.css("animation-delay", delay + "ms");
						$this.removeClass('transparent').addClass("visible " + $this.attr("data-animation"));	



					}, {accX: 0, accY: -10});

				}
				else {

					$this.removeClass("transparent").addClass("visible");

				}

			});

			$(".title_effect").each(function() {

				var $this = $(this);

				if($(window).width() > 1199) {

					$this.appear(function() {

						if($this.length){ 
							$this.textillate('in');
							// $this.removeClass("transparent").addClass("visible");
						}

					}, {accX: 0, accY: -10});

				}
				else {

					// $this.removeClass("transparent").addClass("visible");

				}

			});

		},

		/**
		**  Nav Resp
		**/

		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".header_resp_nav").slideToggle("medium");
          
            });

           if(self.w.width() < 1200){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.resp_nav_wr').length){

                    $('.btn_nav').removeClass('active').next(".header_resp_nav").slideUp("medium");
                   
                   }

              });

            }

        },

		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			$('.swiper-1 .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');

		    setTimeout(function(){

		    	$('.swiper-1 .swiper-pagination-bullet:first-child').addClass('swiper-pagination-bullet-active');

		    },100);

		     
		    
		},


		/**
		**	Footer Height
		**/

		footerHeight: {

			init: function(){

				var self = this;

				self.footer = $('#footer');
				self.page = $('.page_wrap');

				self.calculation();

				$(window).on('resize', function(){

					self.calculation();

				});

			},

			calculation : function(){

				var self = this;
				
			    var footerHeight = self.footer.outerHeight();

			    self.page.css({
			    	'padding-bottom': footerHeight 
			    });

			}

		},
    
    toggleRecall: (function(){
      let $b = $('.btn-read-recall'), 
          par = ".box_item7_txt", 
          cl = 'show-recall';
      $b.click(function(){
        let $p = $(this).closest(par);
        $p.toggleClass(cl);
      });
    }()),

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);



