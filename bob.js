//   \xc4 = Ä
//   \xe4 = ä
//   \xdc = Ü 
//   \xfc = ü
//   "\xfcML\xe4\xdcTS" === "üMLäÜTS"          
//    var result = bob.hey('\xdcML\xc4\xdcTS!'); 
// Bob answers 'Sure.' if you ask him a question.
// He answers 'Whoa, chill out!' if you yell at him.
// He says 'Fine. Be that way!' if you address him without actually saying
//anything.
// He answers 'Whatever.' to anything else.


var Bob = function() {};

Bob.prototype.hey = function(input) {

var pattern = /[a-z]+/i;

if (input.trim() == '') {

return 'Fine. Be that way!';

}
	
else if ( input == input.toUpperCase() & pattern.test(input)) {

return 'Whoa, chill out!';

}

else if ( input.charAt(input.length - 1) == '?') {

return 'Sure.';

}

else { 

return 'Whatever.';

}

};

module.exports = Bob;
