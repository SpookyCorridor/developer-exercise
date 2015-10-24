function accordion() {
	var wrappers = $('.accordion-wrapper'); 
	var children = $('.accordion-wrapper').children();

	$.each(wrappers, function(idx, wrapper) {
		$(this).find('> * > *').not(':first-child').hide(); 
	});

	$($(children)).on('click', function(){
	  $(this).children().not(':first-child').slideToggle('slow');
	  $(this).siblings().children().not(':first-child').slideUp("slow"); 
	})
}