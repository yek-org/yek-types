const fixed = (...fixes) => {
	return {
		match(value) {
			return !!fixes.find((v) => value === v);
		},
		which(value) {
			return fixes.find((v) => value === v);
		},
		enumic() {
			let obj = {};
			fixes.map((fix) => Object.assign(obj, { [fix]: fix }));
			return Object.freeze(obj);
		},
	};
};

fixed.from = function (types) {
	return fixed(...Object.values(types));
};

// fixed('js', 'ts', 'json').match('jsx'); // false
// fixed('js', 'ts', 'json').match('js'); // true
// fixed('js', 'ts', 'json').enumic(); // { js, ts, json }
// what is : for make a absolute list of values like tuple and enum but use value istead type

export default fixed;
