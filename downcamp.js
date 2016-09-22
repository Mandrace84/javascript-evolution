
var Mailchimp = require('mailchimp-api-v3');

var fs = require ('fs');

var parseJson = require('node-json').parse;

var requireJson = require('node-json').require;

var API_KEY = '';

var mailchimp = new Mailchimp(API_KEY);

mailchimp.get({
    path : '/campaigns/?483861&fields'
})
    .then(function (result) {
		
	fs.writeFile ('c:\test.json', result.campaigns);
		
	requireJson('c:\test.json');
 
    parseJson();

})	
		
	.catch(function (err) {

	console.log(err);

	
    })