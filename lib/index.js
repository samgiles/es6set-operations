// All elements of A (this) that also belong to B (other)
function intersection(other) {
	var self = this;
	return new Set(other.toArray().filter(function(value) {
		return self.has(value);
	}));
}

// Relative complement of this (A) and other (B)
// Returns the set of objects in other (B) but not in this (A)
function difference(other) {
	var self = this;
	return new Set(other.toArray().filter(function(value) {
		return !self.has(value);
	}));
}

function toArray() {
	var array = [];
	this.forEach(function(value) {
		array.push(value);
	});
	return array;
}

module.exports = {
    toArray: toArray,
    difference: difference,
    intersection: intersection
};
