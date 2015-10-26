describe("initialize testing", function() {

	var apiLink = 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json';

	describe("collection", function() {
		beforeEach(function() {
			this.model = new Quote(); 
			this.collection = new QuoteList(); 
		});

		it("should have correct default 'url' property", function(){		 
			this.collection.url.should.equal(apiLink);
		});

		it('should make a single server request on fetch', function() {
			var spy = sinon.spy(jQuery, 'ajax');
			this.collection.fetch();
			sinon.assert.calledOnce(spy);
			jQuery.ajax.restore();
		})
	});
});