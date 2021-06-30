const list = (...fixes) => {
  return {
    match(value) {
      return !!fixes.find((v) => value === v);
    },
    which(value) {
      return fixes.find((v) => value === v);
    },
    enumic() {
      let obj = {};
      fixes.map((fix) => Object.assign(obj, { [fix]: fix }));
      return Object.freeze(obj);
    },
  };
};

list.from = function (types) {
  return list(...Object.values(types));
};

// list('js', 'ts', 'json').match('jsx'); // false
// list('js', 'ts', 'json').match('js'); // true
// list('js', 'ts', 'json').enumic(); // { js, ts, json }
// what is : for make a absolute list of values like tuple and enum but use value istead type

export default list;
