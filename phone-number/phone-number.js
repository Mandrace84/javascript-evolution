
var PhoneNumber = function(phone) {
	
this.input = phone
	
};

PhoneNumber.prototype.number = function () {

var result = '';
	
result = this.input.replace (/\s/g, '').replace (/[^0-9]/g, '');

if ((this.input.length == 11) & (this.input[0] == 1)) {
	
result = this.input.replace (/[1]/, '')

return result;
	
}

else if ((this.input.length == 11) || (this.input.length == 9)) {
	
result = '0000000000';

return result
	
}
	
else return result; 

};

PhoneNumber.prototype.areaCode = function () {
	
var result = '';

result = this.input[0] + this.input[1] + this.input[2];

return result;

};

PhoneNumber.prototype.toString = function () {
	
var result = '';

result = '(' + this.input.substring (0,3) + ')' + ' ' + this.input.substring (3,6) + '-' + this.input.substring (6,10);  

return result;

};

module.exports = PhoneNumber;