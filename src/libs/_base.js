import { base } from '../utils.js';

// TODO : move file to base/ folder
// TODO : export `TYPES` to type/ folder

const BASE_TYPES = {
  FUNCTION: 'function',

  // TODO : 'generator' || 'genfunc' || 'gen-function'
  GENERATOR: 'generatorfunction',

  // TODO : 'async' || 'asyncfunc' || 'async-func'
  ASYNC: 'asyncfunction',
  PROMISE: 'promise',
  ARRAY: 'array',
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  REGEXP: 'regexp',
};

const BASE = {
  ALL_FUNCTIONS: /(function|async|generator|promise)/i,
  FUNCTION: /function/i,
  GENERATOR: /(generator|gen|generic|genfunc|generatorfunction)/i,
  ASYNC: /(async|asyncfunction|async-func)/i,
  PROMISE: /promise/i,
  ARRAY: /array/i,
  STRING: /string/i,
  NUMBER: /number/i,
  BOOLEAN: /boolean/i,
  REGEXP: /regexp/i,
};

export const BASE_FUNCTION = {
  ALL(arg) {
    // TODO : change to `BASE_FUNCTION.FUNC && BASE_FUNCTION.ASYNC && ...`;
    return array([
      BASE_TYPES.FUNCTION,
      BASE_TYPES.GENERATOR,
      BASE_TYPES.ASYNC,
      BASE_TYPES.PROMISE,
    ]).has(base.proto(arg));
  },
  FUNCTION(arg) {
    return base.isProto(arg, BASE_TYPES.FUNCTION);
  },
  GENERATOR(arg) {
    return base.isProto(arg, BASE_TYPES.GENERATOR);
  },
  ASYNC(arg) {
    return base.isProto(arg, BASE_TYPES.ASYNC);
  },
  PROMISE(arg) {
    return base.isProto(arg, BASE_TYPES.PROMISE);
  },
};
export const BASE_ARRAY = {
  ARRAY(arg) {
    return base.isProto(arg, BASE_TYPES.ARRAY);
  },
  LIKE(arg) {
    // FIXME : need the some logic
  },
};
export const BASE_NULLISH = (value) => array([undefined, null]).has(value);

// TODO : replace `isProto(value, 'string')` with `base.proto(value, TYPES.STRING);`
export const BASE_STRING = (value) => base.isProto(value, BASE_TYPES.STRING);
export const BASE_NUMBER = (value) => base.isProto(value, BASE_TYPES.NUMBER);
export const BASE_BOOLEAN = (value) => base.isProto(value, BASE_TYPES.BOOLEAN);
export const BASE_REGEXP = (value) => base.isProto(value, BASE_TYPES.REGEXP);

/**
 *  NATIVES
 * ---------
 * [x] base.proto('hello world');           // string
 * [x] base.proto(1000);                    // number
 * [x] base.proto(Infinity);                // number
 * [x] base.proto(true);                    // boolean
 * [ ] base.proto(Symbol());                // symbol
 * [ ] base.proto(null);                    // null
 * [ ] base.proto(undefined);               // undefined
 * [ ] base.proto({});                      // object
 * [x] base.proto([]);                      // array
 * [x] base.proto(/[a-z]/g);                // regexp
 * [ ] base.proto(new Date(2021));          // date
 * [ ] base.proto(new Error());             // error
 * [x] base.proto(function() {});           // function
 * [x] base.proto((a, b) => a + b);         // function
 * [x] base.proto(async () => {});          // asyncfunction
 * [x] base.proto(document);                // htmldocument
 *
 *  EXTRA-TYPES
 * -------------
 * [ ] base.proto(1.5);                     // number (float)
 * [ ] base.proto(-1.5);                    // number (signed-float)
 * [ ] base.proto(-15);                     // number (signed)
 * [ ] base.proto(15);                      // number (unsigned)
 * [ ] base.proto(15 || '15');              // number (digit)
 */
