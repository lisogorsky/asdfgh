$(document).ready(function() {
	
	$('#thanks span').click(function() {
		$('#thanks').remove();
	});
	
	function total(class, split, id) {
		var arr = ($(class).clone()).text();
		var substr = arr.split(split);
		substr.pop();
		var sum = 0;
		for (var i=0; i<substr.length; i++) {
			var rub = parseInt(substr[i].replace(" ", ""));
			sum = sum + rub;
		}
		var sum2 = String(sum);
		var sum3 = sum2.split('');
		sum3.splice(-3,0," ");
		sum3.splice(-7,0," ");
		$(id).html(sum3);
	}

	total('.sum_money', 'руб.', '#summTotal');
	total('.quantity', '.', '#quantityTotal');
	total('.people', 'чел.', '#peopleTotal');
	
	// блок с поздравлениями начало
	// if ( $(window).width() > 767 ) {
	// var a = $('iframe');
	// $('body').append(a);
	// a.css({'width':'245px','height':'137px','position':'fixed','bottom':'40px','left':'50px'});
	// var b = $('<div id="videoContent"></div>');
	// $('body').append(b);
	// $('body').append('<div id="paranja"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><div id="videoBig"></div></div>');
	// $('#paranja').append(a.clone());
	// $('#videoContent').html('<span id="clickVideo"></span><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
	// $('#clickVideo').click(function() {
	// $('#paranja').slideDown(777);
	// $('#paranja > iframe').css({'width':'560px','height':'315px','position':'absolute','bottom':'0','left':'0','right':'0','top':'0','margin':'auto','z-index':'1001'});
	// });
	// $('#clickVideo + .glyphicon-remove').click(function() {
	// $('body > iframe').remove();
	// $('#videoContent').remove();
	// });
	// $('#paranja .glyphicon-remove').click(function() {
	// $('#paranja').slideUp(777);
	// });
	// };
	// блок с поздравлениями конец
	
});


$(function() {
	var $page = $('html, body');
	$('a[href^="#s"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000); // здесь задаётся скорость прокрутки
		return false;
	});
	$('.scroll-right li a').click(function() {
		$('.scroll-right li').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('#imgVisible').on('click', function() {
		$('.row.hideIMG').slideDown(555);
	})

});
