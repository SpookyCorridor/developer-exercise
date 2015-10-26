var Quote = Backbone.Model.extend();

var QuoteList = Backbone.Collection.extend({
	model: Quote,
	url: 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json'
});

var QuoteView = Backbone.View.extend({
	el: "#quotes",
	template: _.template($('#quotes-template').html()),
	page: 0,
	perPage: 15,
	totalPages: 0,
	loadMore: null,

	initialize: function() {
		var that = this; 
		this.loadMore = new loadMoreQuotesView();
		this.collection = new QuoteList; 
		this.collection.on('reset', function() {
			that.render();
		}, this)
		this.render(); 
	},

	render: function() {
		var that = this; 
		this.collection.fetch({
			success: function(data) {
				that.totalPages = Math.ceil(_.size(that.collection.models) / that.perPage);
					return that.renderQuoteGroup(0, that.perPage - 1);
			}
		});
	},

	renderQuoteGroup: function(start, end) {
			// console.log('rendering...');
			var subset = _.filter(this.collection.models, function(num, index){
				return (index >= start) && (index <= end);
			});
			
			_.each(subset, function(quote) {
				var quoteTemplate = this.template(quote.toJSON());
				$(this.el).append(quoteTemplate);
			}, this);

			this.renderLoadMoreButton();
			return this;
		}, 

		renderLoadMoreButton: function() {
			if(this.page >= (this.totalPages - 1)) {
				this.loadMore.$el.hide();
			} else {
				this.$el.append(this.loadMore.$el.detach().show());
				}
			}
	});

	var loadMoreQuotesView = Backbone.View.extend({
		el: $("#load-more-quotes")
	});

});