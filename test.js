var should = require("should");

describe('pair', function(){
    it('should contain two cards of the same rank',function(){
		isPair([1,2,3,5,5]).should.equal(true);
		isPair([1,2,3,4,5]).should.equal(false);
		isPair([1,2,2,2,3]).should.equal(false);
	});
});

var isPair = function(cardRanks){
    var rankFrequencies = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);

    for (var index = 0; index < cardRanks.length; index++) {
        var cardRank = cardRanks[index];
        rankFrequencies[cardRank - 1]++;
    }

    for (var index = 0; index < rankFrequencies.length; index++) {
        if (rankFrequencies[index] == 2) {
            return true;
        }
    }

    return false;
}

