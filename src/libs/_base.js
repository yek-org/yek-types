export const BASE_FUNCTION = {
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
    return [''];
  },
  LIKE(arg) {},
};
export const BASE_NULLISH = (value) => array([undefined, null]).has(value);

/**
 * TYPES [native]
 * what.proto('hello world');           // string
 * what.proto(1000);                    // number
 * what.proto(Infinity);                // number
 * what.proto(true);                    // boolean
 * what.proto(Symbol());                // symbol
 * what.proto(null);                    // null
 * what.proto(undefined);               // undefined
 * what.proto({});                      // object
 * what.proto([]);                      // array
 * what.proto(/[a-z]/g);                // regexp
 * what.proto(new Date(2021));          // date
 * what.proto(new Error());             // error
 * what.proto(function() {});           // function
 * what.proto((a, b) => a + b);         // function
 * what.proto(async () => {});          // asyncfunction
 * what.proto(document);                // htmldocument
 */
