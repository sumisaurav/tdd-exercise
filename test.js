var should = require("should");
var _= require("lodash");

describe('pair', function() {
    it('should contain two cards of the same rank',function(){
		hasPair([1,2,3,5,5]).should.equal(true);
		hasPair([1,2,3,4,5]).should.equal(false);
		hasPair([1,2,2,2,3]).should.equal(false);
	});
});

describe('triple', function() {
    it('should contain three cards of the same rank',function(){
		hasTriple([1,2,5,5,5]).should.equal(true);
		hasTriple([1,2,3,4,5]).should.equal(false);
		hasTriple([1,2,7,2,3]).should.equal(false);
		hasTriple([2,2,2,2,3]).should.equal(false);
	});
});

var hasPair = function(cardRanks) {
    return containsFrequency(cardRanks, 2);
};

var hasTriple = function(cardRanks) {
    return containsFrequency(cardRanks, 3);
};

var containsFrequency = function(cardRanks, frequency) {
    return _.contains(rankFrequencies(cardRanks), frequency);
};

var rankFrequencies = function(cardRanks) {
    return _.countBy(cardRanks);
};
