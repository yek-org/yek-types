import { what } from '../utils.js';

export const BASE_FUNCTION = {
  // TODO : replace all `what.proto` with `what.isProto`
  ALL(arg) {
    return array([
      'function',
      'generatorfunction',
      'asyncfunction',
      'promise',
    ]).has(what.proto(arg));
  },
  NORM(arg) {
    return what.proto(arg) === 'function';
  },
  GENERIC(arg) {
    return what.proto(arg) === 'generatorfunction';
  },
  ASYNC(arg) {
    return what.proto(arg) === 'asyncfunction';
  },
  PROMISE(arg) {
    return what.proto(arg) === 'promise';
  },
};
export const BASE_ARRAY = {
  NORM(arg) {
    // TODO : use TYPES enum and replace with `return what.isProto(arg, TYPES.ARRAY);`
    // TODO : remove `is` prefix from `isProto` method and use `proto` instead
    return what.isProto(arg, 'array');
  },
  LIKE(arg) {
    // FIXME : need the some logic
  },
};
export const BASE_NULLISH = (value) => array([undefined, null]).has(value);

// TODO : replace `isProto(value, 'string')` with `base.proto(value, TYPES.STRING);`
export const BASE_STRING = (value) => what.isProto(value, 'string');

/**
 * TYPES [native]
 * [x] what.proto('hello world');           // string
 * [ ] what.proto(1000);                    // number
 * [ ] what.proto(Infinity);                // number
 * [ ] what.proto(true);                    // boolean
 * [ ] what.proto(Symbol());                // symbol
 * [ ] what.proto(null);                    // null
 * [ ] what.proto(undefined);               // undefined
 * [ ] what.proto({});                      // object
 * [x] what.proto([]);                      // array
 * [ ] what.proto(/[a-z]/g);                // regexp
 * [ ] what.proto(new Date(2021));          // date
 * [ ] what.proto(new Error());             // error
 * [x] what.proto(function() {});           // function
 * [x] what.proto((a, b) => a + b);         // function
 * [x] what.proto(async () => {});          // asyncfunction
 * [x] what.proto(document);                // htmldocument
 */
