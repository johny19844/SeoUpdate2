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

//Обработка svg файлов
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data){
			var $svg = $(data).find('svg');
			if (typeof imgID !=='undefined'){
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !=='undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
		}, 'xml');
	});

});
