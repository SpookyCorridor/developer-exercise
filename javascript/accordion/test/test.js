describe('load test', function() {
	it('should load the tests and pass', function() {
		var pass = true; 
		expect(pass).to.be.true;
	})
});

describe('Accordion', function() {
	it('should display first child of accordion-header', function() {
		accordion(); 
		var firstChildStyle = $('.accordion-header').eq(0).children(':first-child').css('display');
		expect(firstChildStyle).to.not.equal('none');
	});
})