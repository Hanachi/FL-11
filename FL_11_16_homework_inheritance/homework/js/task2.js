function create(obj) {
  function F() {
    return;
  }
  F.prototype = obj;
  let object = new F();
  return object;
}
// const obj1 = { prop: 5 };
// const obj2 = create(obj1);
// console.log(Object.getPrototypeOf(obj2) === obj1);
// console.log(obj2.prop);