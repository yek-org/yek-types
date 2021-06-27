import { what } from '../utils';

enum TYPES {
	STRING = 'string',
	NUMBER = 'number',
	BOOLEAN = 'boolean',
	EMPTY = 'empty',
	// TODO :
	/**
	 * promise
	 * promise-like
	 * structred -> object-native | object-like
	 * object -> {}
	 * null -> null
	 */
}
enum BOOLEAN {
	// true = 1,
	TRUE = 1,
	True = 1,
	ON = 1,
	On = 1,
	on = 1,
	YES = 1,
	Yes = 1,
	yes = 1,
	// false = 0,
	FALSE = 0,
	False = 0,
	OFF = 0,
	Off = 0,
	off = 0,
	NO = 0,
	No = 0,
	no = 0,
}

type TypeName = 'string' | 'number' | 'boolean' | 'empty'; // TODO : move to module file, use more type
type bit =
	| true
	| false
	| 'on'
	| 'off'
	| 'yes'
	| 'no'
	| 'true'
	| 'false'
	| 0
	| 1
	| BOOLEAN;
type length = number | string;
type validate = boolean;
type PropsType =
	| DefaultProps
	| StringProps
	| NumberProps
	| BooleanProps
	| ArrayProps
	| ObjectProps
	| EmptyProps;

interface DefaultProps {
	type?: string | { type: string } | TYPES | TypeName;
	value?: any;
	length?: { max?: length; min?: length } | [length, length];
	min?: length;
	max?: length;
	empty?: boolean;
}
interface EmptyProps extends DefaultProps {
	deep?: boolean;
}
interface StringProps extends DefaultProps {
	trim?: boolean;
}
interface NumberProps extends DefaultProps {
	signs?: boolean; // true
	// float: boolean; // true
	// absolute?: boolean;
}
interface BooleanProps extends DefaultProps {
	native?: boolean;
	absolute?: boolean; // type:bool
}
interface ArrayProps extends DefaultProps {
	deep?: boolean; // check empty -> [null, undefined, '']
	empty?: boolean; // [] || new Array() || Array
}
interface ObjectProps extends ArrayProps {
	deep?: boolean; // { key: null, key: undefined, undefined: value };
	empty?: boolean;
	native?: boolean;
}
// interface IFNativeObjectProps extends Required<ObjectProps> {}

interface ISInterface {
	props(props: PropsType): validate;
	string(value: any, props?: StringProps): validate;
	number(value: number, props?: PropsType): validate;
	empty(value: any, props?: PropsType): validate;
}

type ISType = ISInterface | validate;

const is: ISInterface = function Is(
	value: any,
	type?: string,
	props?: PropsType
): ISType {
	if (type) {
	}
	return {
		props(props: PropsType): validate {
			return false;
		},
		string(value, props?: StringProps): validate {
			return false;
		},
		number(value: any, props?: NumberProps): validate {
			return false;
		},
		empty(value: any, props?: EmptyProps): validate {
			return false;
		},
	};
};

is.props = function (props: PropsType): validate {
	return false;
};
is.string = function (value: any, props?: PropsType): validate {
	return false;
};
is.number = function (value: any, props?: PropsType): validate {
	return false;
};
is.empty = function (value: any, props?: EmptyProps): validate {
	return false;
};
