function accordion() {
	var wrappers = $('.accordion-wrapper'); 
	var children = $('.accordion-wrapper').children();

	$.each(wrappers, function(idx, wrapper) {
		$(this).find('> * > *').not(':first-child').hide(); 
	});

	
}