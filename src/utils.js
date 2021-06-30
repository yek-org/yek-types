import list from './libs/_list';
const to = {};
const nullish = BASE_NULLISH;

to.enumic = function Enumic(enums) {
  let obj = Object.create({});
  enums.reduce((prev, current) => {
    return Object.assign(obj, { [current]: current });
  }, {});
  return obj;
};

export { to };
export const array = (data) => ({
  has(target) {
    return data.indexOf(target) > -1;
  },
  equal(target) {
    return (
      data.length === target.length && data.every((v, i) => v === target[i])
    );
  },
});

// TODO : replace with `TYPES` on _base.js
export const TYPES = [
  'string',
  'number',
  'number',
  'boolean',
  'symbol',
  'null',
  'undefined',
  'object',
  'array',
  'regexp',
  'date',
  'error',
  'function',
  'function',
  'asyncfunction',
  'htmldocument',
];
export const base = {
  type: (value) => typeof value,

  // TODO : replace with BASE_CONSTRUCTOR(value) -> constructor.lowerCase
  construct(value) {
    if (!nullish(value)) {
      let regex = /function (.{1,})\(/i;
      let exactConstructor = value.constructor.toString();
      let exec = regex.exec(exactConstructor);
      return exec?.length > 1 ? exec[1].toLowerCase() : 'TypeError';
    }
    return 'nullish';
  },

  // TODO : move to BASE_PROTOTYPE(value) -> proto.lowerCase
  proto(value) {
    let regex = /\[object (.*?)\]/i;
    let exactPrototype = Object.prototype.toString.call(value);
    let exactType = regex.exec(exactPrototype)[1];
    return exactType.toLowerCase();
  },

  // TODO : remove `is` prefix
  isProto(value, type) {
    if (list.from(TYPES).match(type)) return base.proto(value) === type;

    // TODO : replace `TypeError` with internal type-error on `list` type
    throw new TypeError(
      `[base.isProto] : argument \`type\` should be a valid type and ${type} is invalid`
    );
  },
};
export const unique = (() => ((id = 0), (step = 1) => (id += step)))();
