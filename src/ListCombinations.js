Array.prototype.combinations = function() {
	var array = this;
	var result = [];
	for(var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (i != j) {
				result.push( [array[i],array[j]] );
			}
		}
	}
	return result;
}