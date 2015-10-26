var Quote = Backbone.Model.extend();

var QuoteList = Backbone.Collection.extend({
	model: Quote,
	url: 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json'
});

var QuoteView = Backbone.View.extend({
	el: "#quotes",
	template: _.template($('#quotes-template').html()),

	initialize: function() {
		var that = this; 
		this.collection = new QuoteList; 
		this.render(); 
	},

	render: function() {
		var that = this; 
		return this; 
	} 
});