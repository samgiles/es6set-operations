var Set = require('es6-set');

// All elements of A (this) that also belong to B (other)
function intersection(set, other) {
	return new Set(toArray(other).filter(function(value) {
		return set.has(value);
	}));
}

// Relative complement of this (A) and other (B)
// Returns the set of objects in other (B) but not in this (A)
function difference(set, other) {
	return new Set(toArray(other).filter(function(value) {
		return !set.has(value);
	}));
}

function toArray(set) {
	var array = [];
	set.forEach(function(value) {
		array.push(value);
	});
	return array;
}


module.exports = {
    toArray: toArray,
    difference: difference,
    intersection: intersection
};
