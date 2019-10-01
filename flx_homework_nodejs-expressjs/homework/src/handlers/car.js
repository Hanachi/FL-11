const fs = require('fs');
let data;
getData = (callback, backToFile = false) => {
  let data = JSON.parse(fs.readFileSync('./db/data.json', 'utf-8'));
  if (backToFile) {
    fs.writeFileSync('./db/data.json', JSON.stringify(data),'utf-8');
  }
  return callback();
}
function createCar(id, brand, model, engineVolume, year) {
  return getData(() => {
    let newCar = {
      id: id, 
      brand: brand, 
      model: model, 
      engineVolume: engineVolume, 
      year:year
    };
    let car = data.find((car) => {
      return car.id === newCar.id;
    });
    if(!car) {
      data.push(newCar);
      return {
        status: 201,
        body: newCar
      } 
    } else {
        return {
          status: 409,
          body: {message: 'Car already exists'}
        }
      }
  },true);
}
getAll = () => {
  return getData(() => {
    return {
      body: data,
      status: 200
    }
  });
}
module.exports.getAll = getAll;
module.exports.createCar = createCar;