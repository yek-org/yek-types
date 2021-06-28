const tuple = (...items) => {
	return {
		match(arg) {
			// TODO : use `base-check-type`
			return items.every((item) => item === arg);
		},
	};
};

tuple.from = function (items) {
	return tuple(...Object.values(items));
};

// tuple(['string', 'number', 'boolean']).match(['jsx']); // false [error: missed items]
// tuple(['string', 'number', 'boolean']).match(['js', 30, false]); // true
//? actuallly work with union and interface

export default tuple;
