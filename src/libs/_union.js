import { to, base } from '../utils.js';
import list from '../libs/_list.js';

/**
 * ! TODO :
 * - [ ] : `union('string', 'number');`
 * - [ ] : `union('string|number');`
 * - [ ] : `union('string | number');`
 * - [ ] : `union(type.string, type.number);`
 * - [ ] : `union(type('string'), interface('string'), tuple('string', 'number'));`
 */

const union = (...types) => {
  // TODO : use `list(...TYPES).all.match(...types);`
  return {
    type: to.enumic(types),
    match(value) {
      let res = types.find((type) => base.isProto(value, type));
      if (res) return value;
      return { value, type: base.proto(value) };
    },
    matchSync(value) {
      return new Promise((resolve, reject) => {
        let res = types.find((type) => base.isProto(value, type));
        if (res) resolve(value);
        reject({ value, type: base.proto(value) });
      });
    },
  };
};

union.from = function (types) {
  return union(...types);
};

export default union;

/**
 * ```
 * let AgeType = union('string', 'number');
 * AgeType.type
 * //=> 'string', 'number'
 * AgeType.match('my-value')
 * //=> #true  => 'my-value'
 * AgeType.match(['my', 'other', 'value'])
 * //=> #false => { value: [...], type: 'array' }
 * ```
 * ? nice work with `type`\
 * ! need to work with tuple || interface
 */
