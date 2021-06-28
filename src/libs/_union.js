import { from, to } from '../utils';

const union = (...types) => {
	return {
		type: to.enumic(types),
		match(value) {
			// TODO : use util-type-check
			let res = types.find((type) => from.construct(value) === type);
			if (res) return value;
			return { value, type: from.construct(value) };
		},
		matchSync(value) {
			return new Promise((resolve, reject) => {
				let res = types.find((type) => from.construct(value) === type);
				if (res) resolve(value);
				reject({ value, type: from.construct(value) });
			});
		},
	};
};

union.from = function (types) {
	return union(...types);
};

export default union;

/**
 * let AgeType = union('string', 'number');
 * AgeType.type							   //=> 'string', 'number'
 * AgeType.match('my-value')			   //=> #true  => 'my-value'
 * AgeType.match(['my', 'other', 'value']) //=> #false => { value: [...], type: 'array' }
 * ? nice work with `type`
 * ! need to work with tuple || interface
 */
