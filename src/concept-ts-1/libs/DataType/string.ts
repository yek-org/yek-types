import { TypeName, Type } from '../type';

export default class STRING extends Type {
	static validate(value: any): boolean {
		return typeof value === 'string';
	}
	constructor() {
		super(TypeName.STRING);
	}
}
