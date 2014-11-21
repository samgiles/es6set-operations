var Set = require('es6-set');
var SetOps = require('../lib');
var assert = require('assert');

describe("SetOps", function() {
    describe(".toArray(set)", function() {
        it("should convert a set to an Array", function() {
            var mySet = new Set([1, 2, 3]);

            var newArray = SetOps.toArray(mySet);
            assert.deepEqual([1, 2, 3], newArray);
        });
    });

    describe(".intersection(set, other)", function() {
        it("should take all the elements of 'set' that are also in 'other'", function() {
            var mySetA = new Set([1, 2]);
            var mySetB = new Set([1, 3]);

            var intersection = SetOps.intersection(mySetA, mySetB);
            assert.deepEqual([1], SetOps.toArray(intersection));
        });
    });

    describe(".difference(set, other)", function() {
        it('should return the objects in other but not in set (relative complement)', function() {
            var mySetA = new Set([1, 2, 3, 4, 5, 6, 7]);
            var mySetB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            var difference = SetOps.difference(mySetA, mySetB);

            assert.deepEqual([8, 9], SetOps.toArray(difference));

        });
    });
});

