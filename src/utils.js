const [to, from] = [{}, {}];

to.enumic = function Enumic(enums) {
	let obj = Object.create({});
	enums.reduce((prev, current) => {
		return Object.assign(obj, { [current]: current });
	}, {});
	return obj;
};
from.construct = function (value) {
	if ([undefined, null].indexOf(value) == -1) {
		let res = /function (.{1,})\(/.exec(value.constructor.toString());
		return res?.length > 1 ? res[1].toLowerCase() : 'TypeError';
	}
	return 'nullish';
};

export { from, to };
export function type(value) {
	return typeof value;
}
export function base(value) {
	return value?.constructor;
}
