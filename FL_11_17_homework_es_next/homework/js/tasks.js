//Task1
let maxElement = (arr) => {
  return Math.max(...arr);
}
const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
console.log(maxElement(array));
//Task2
let copyArray = (arr) => {
  return [...arr];
}
const myArr = [1, 2, 3];
const copiedArray = copyArray(myArr);
console.log(myArr,copiedArray);
console.log(myArr === copiedArray);
///Task3
const uId = Symbol('id');
let newObject = {};
let addUniqueId = (obj) => {
  Object.assign(newObject = {id: uId}, obj);
  return newObject;
}
addUniqueId({name:'123'});
console.log(newObject);
//Task4
const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
let regroupObject = (obj) => {
  let {name: firstName, details: {id, age, university}} = obj;
  return newObj = {university, user: {age, firstName, id}};
}
regroupObject(oldObj);
console.log(newObj);
//Task5
const myArray = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
let findUniqueElements = (arr) => {
  let uniqueElements = Array.from(new Set(arr));
  return uniqueElements;
}
console.log(findUniqueElements(myArray));
//Task6
const phoneNumber = '0123456789';
let hideNumber = (phone) => {
  let last4Digits = phone.slice(-4);
  let hiddenNumber = last4Digits.padStart(phone.length, '*');
  return hiddenNumber;
}
console.log(hideNumber(phoneNumber));
//Task7
let requiredArg = () => {
  throw new Error('Missing property');
}
function add(a = requiredArg(), b = requiredArg()) {
    return a + b;
  }
//Task8
let yourUser = 'Hanachi';
function fetchJson(url) {
  return fetch(url)
    .then(request => request.json())
    .then(text => text.map(item => item.name).sort(item => item))
    .catch(error => console.log(`ERROR: ${error.stack}`));
}
fetchJson(`https://api.github.com/users/${yourUser}/repos`).then(res => console.log(res));
//Task9
async function fetchJson1(url) {
  try {
    const request = await fetch(url);
    const text = await request.json();
    return text.map(item => item.name).sort(item => item);
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
fetchJson1(`https://api.github.com/users/${yourUser}/repos`).then(res => console.log(res))