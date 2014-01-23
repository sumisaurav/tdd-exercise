var should = require("should");

describe('pair', function(){
    it('should contain two cards of the same rank',function(){
		isPair([1,2,3,5,5]).should.equal(true);
		isPair([1,2,3,4,5]).should.equal(false);
		isPair([1,2,2,2,3]).should.equal(false);
	});
});

var isPair = function(handOfCards){
    var countArr = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

    for (var index = 0; index < handOfCards.length; index++) {
        countArr[handOfCards[index] - 1]++;
    }

    for (var index = 0; index < countArr.length; index++){
        if( countArr[index]==2)
            return true;
    }

    return false;
}

