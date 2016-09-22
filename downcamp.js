
var Mailchimp = require('mailchimp-api-v3');

var fs = require ('fs');

var parseJson = require('node-json').parse;

var requireJson = require('node-json').require;

var API_KEY = '';

var mailchimp = new Mailchimp(API_KEY);

mailchimp.get({
    path : '/campaigns/a6ae2485a7'
})
    .then(function (result) {
		
	fs.writeFile ('c:\test.json', result);
		
	requireJson('c:\test.json');
 
    	parseJson();

})	
		
	.catch(function (err) {

	console.log(err);

	
    })