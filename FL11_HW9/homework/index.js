const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const ten = 10;
const eighteen = 18;
const tw4 = 24;
const sixty = 60;
const dayinYear = 365;
const thousand = 1000;
const users = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]
  
function getNumbers(myString){
    let num_arr = [];
    let j = 0;
    for(let i = 0;i <myString.length;i++){
        if(!isNaN(myString[i])){
            num_arr[j] = myString[i];
            j++;
        }
    }
    return num_arr;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

function findTypes(...args){
    let obj = {};
    for(let i=0;i<args.length;i++){
        let key = typeof args[i];
        if(obj.hasOwnProperty(key)){
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}
console.log(findTypes(five,'hello',null));

function executeforEach(array,func){
    for(let i = 0;i < array.length;i++){
        func(array[i]);
    }
}
executeforEach([1,two,three], function(el) {
     console.log(el);
    });

function mapArray(array,func){
    let transformed_array = [];
    executeforEach(array,function(el){
        transformed_array.push(func(el));
    });
    return transformed_array;
}
console.log(mapArray([two, five, eight], function(el){ 
    return el + three;
}));

function filterArray(array,func){
    let filtered_array = [];
    executeforEach(array,function(el){
        if(func(el)){
            filtered_array.push(el);
        }
    });
    return filtered_array;
}
console.log(filterArray([two, five, eight], function(el){ 
    return el > three;
}));

function showFormattedDate(date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const getMonth = date.getUTCMonth();
    const getDay = date.getDate();
    const getYear = date.getUTCFullYear();
    return `Date: ${months[getMonth]} ${getDay} ${getYear}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(date){
    return !!Date.parse(date);
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(a,b){
  const _MS_PER_DAY = thousand * sixty * sixty * tw4;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))); 

function getAmountOfAdultPeople(data){
    const userAge = [];
    for(let i = 0;i < data.length;i++){
        userAge.push(Math.round(daysBetween(new Date(data[i].birthday),new Date()) / dayinYear));
    }
    return filterArray(userAge, function (el) {
        return el >= eighteen;
    }).length;
} 
console.log(getAmountOfAdultPeople(users));

function keys (obj) {
    let objectKeys = [];
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            objectKeys.push(key);
          }
    }
    return objectKeys;
  }
  console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

  function values (obj) {
    let objectValues = [];
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        objectValues.push(obj[key]);
      }
    }
    return objectValues;
  }
  
  console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));