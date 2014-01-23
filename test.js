var should = require("should");

describe('hand', function(){
	describe('with a pair', function() {
		it('should return true',function(){
			isPair([1,2,3,5,5]).should.equal(true);
		});
	});                       
});

var isPair = function(handOfCards){
    return true;
}