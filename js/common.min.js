$(function() {

	// $('.poryadok ul li').hover(
	// 	function(){
	// 		$(this).find('.number').addClass('active');
	// 		$(this).find('p').css({
	// 			'padding-left':'110px',
	// 		});
	// }, function(){
	// 		$(this).find('.number').removeClass('active');			
	// 		$(this).find('p').css({
	// 			'padding-left':'90px',
	// 		});
	// });
	$(".content").on("click", "li", function(){

		var tabs = $(".content li .number"),
		    cont = $(".content .number-cont"),
		    tabs_p = $(".content li p");
		    

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active-tab");
		tabs_p.css('padding-left','90px');
		// Добавляем классы active
		$(this).find('.number').addClass("active").next('p').css('padding-left','110px');
		cont.eq($(this).index()).addClass("active-tab");

		//return false;
	});

});
