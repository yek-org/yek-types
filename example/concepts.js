const { is, type, types } = require('../dist'); // TODO: require('@yek/types');
const { clear, log } = console;

clear();

const value = 'MY-VALUE';
const _type =
	'string' || types.string || types.str || types.STRING || types.STR;
const props = {
	// <is.props> => value: 'any-value',
	// _type?: 'any-type',
	// length: { max: 3, min : 9 } `[ERROR] : max should greater that min`
	length: { min: 3, max: 9 },
	// or
	length: [3, 9], // '3, 29'
	max: 9,
	min: 3,
	trim: true || false, // string
	empty: false || true,
	/** <-
	 * string		 -> '' | "" | `` | new String() | String()
	 * number		 -> NaN
	 * object 		 -> {}
	 * native-object -> {} | null | () => {} | null | new Object() | Object() | Object.create()
	 * array 		 -> [] | new Array() | Array()
	 * function		 -> () => {} | function(){} | new Function()
	 */

	native: true || false, // -> boolean | object
};

log(value, _type, props);

log(
	is(value, _type, props),
	is(value, _type).props(props),
	is(value).props(props),
	is.props(props)
);

log(
	is(value, _type),
	is(value).string(),
	is.string(value) // boolean
);

log(
	is(value).string.props(props),
	is.string(value, props),
	is.string.props(props) // no-need : props._type; need : props.value
);

log(type(value) === 'string', `\ntypeof value is ${type(value)}`);
