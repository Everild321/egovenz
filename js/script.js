 
			$(document).ready(function() {
				//responsive menu toggle
				$("#menutoggle").click(function() {
					$('.xs-menu').toggleClass('displaynone');

					});
				//add active class on menu
				$('ul li').click(function(e) {
					e.preventDefault();
					$('li').removeClass('active');
					$(this).addClass('active');
				});
			//drop down menu	
					$(".drop-down").hover(function() {
						$('.mega-menu').addClass('display-on');
					});
					$(".drop-down").mouseleave(function() {
						$('.mega-menu').removeClass('display-on');
					});
			
			});

	 /*Bar de recherche*/
     /*Slide Down SearchBar*/
searchBar.addEventListener('focus', ({ currentTarget }) => currentTarget.classList.add('sliderDown'))

/*Slide Up SearchBar*/
searchBar.addEventListener('blur', ({ currentTarget }) => currentTarget.classList.remove('sliderDown'))



