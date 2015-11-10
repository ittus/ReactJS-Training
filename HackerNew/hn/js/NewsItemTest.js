var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var NewsItem = require('./NewsItem');

$.ajax({
	url: '/json/items.json'
}).then(function(items){
	console.log('items',items);
	ReactDOM.render(<NewsItem item={items[0]} rank={1}/>, $('#content')[0]);
});