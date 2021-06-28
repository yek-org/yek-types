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
export const what = {
  type: (value) => typeof value,
  construct(value) {
    if (!nullish(value)) {
      let regex = /function (.{1,})\(/i;
      let exactConstructor = value.constructor.toString();
      let exec = regex.exec(exactConstructor);
      return exec?.length > 1 ? exec[1].toLowerCase() : 'TypeError';
    }
    return 'nullish';
  },
  proto(value) {
    let regex = /\[object (.*?)\]/i;
    let exactPrototype = Object.prototype.toString.call(value);
    let exactType = regex.exec(exactPrototype)[1];
    return exactType.toLowerCase();
  },
  base(value) {
    // TODO : work with YEKTypes
  },
};
export const unique = (() => ((id = 0), (step = 1) => (id += step)))();
