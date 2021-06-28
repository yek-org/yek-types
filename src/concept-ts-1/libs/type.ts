import { what } from '../utils/index';

export interface IFType {
	type: TypeName;
	validate(value: any): boolean;
}
export const enum TypeName {
	STRING = 'string',
	NUMBER = 'number',
	BOOLEAN = 'boolean',
	STR = 'string',
	NUM = 'number',
	BOOL = 'boolean',
	UNDEFINED = 'undefined',

	// TODO : Add another types (e.g. float, sings, non-signs, object, array, function)
}

export class Type implements IFType {
	public type: TypeName = TypeName.UNDEFINED;
	constructor(typeName?: TypeName) {
		if (typeName) this.type = typeName;
	}
	public validate(value: any): boolean {
		return what(value) === this.type;
	}
}
