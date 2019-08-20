function assign(mainObj, ...rest) {
  for (let i = 0;i< rest.length; i++){
    for (let key in rest[i]) {
      if (Object.prototype.hasOwnProperty.call(rest[i], key) && (rest[i] !== null && typeof rest[i] === 'object')) {
        mainObj[key] = rest[i][key];
      }
    }
  }
  return mainObj;
}
// const defaults = { a: 123, b: 777 };
// const options = { a: 456 };
// const configs = assign({}, defaults, options);
// console.log(configs);