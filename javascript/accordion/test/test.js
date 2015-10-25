describe('load test', function() {
	it('should load the tests and pass', function() {
		var pass = true; 
		expect(pass).to.be.true;
	})
});

describe('Accordion', function() {
	it('should display first child of accordion-header', function() {
		var firstChildStyle = $('.accordion-header').eq(0).children(':first-child').css('display');
		expect(firstChildStyle).to.not.equal('none');
	});

	it('should hide all other children of accordion-header', function() {
		var otherChildren = $('.accordion-header').eq(0).children().not(':first-child');
		$.each(otherChildren, function(child) {
			expect(otherChildren[child].style.display).to.equal('none'); 
		})
	})

	it('should toggle content on clicking accordion-header', function() {
		var secondAnchor = $('.accordion-header').eq(1).children(':first-child');
		$(secondAnchor).trigger("click");
		var secondChildren = $('.accordion-header').eq(1).children().not(':first-child');
		$.each(secondChildren, function(child) {
			expect(secondChildren[child].style.display).to.equal('block'); 
		});

	})
	
})