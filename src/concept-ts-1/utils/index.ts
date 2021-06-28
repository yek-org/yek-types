export type length = string | number;
export interface DefaultProps {
	type?: string | { type: string }; //| TYPES | TypeName;
	value?: any;
	length?: { max?: length; min?: length } | [length, length];
	min?: length;
	max?: length;
	empty?: boolean;
}
export function what(value: any): string {
	return typeof value;
}
