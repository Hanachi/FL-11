const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const deleteAuth = require('./middlewares/delete-authorization');
const car = require('./handlers/car');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/car', (req, res) => {
  let output = car.createCar(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
  res.status(output.status).send(output.body);
});

router.get('/car', (req, res) => {
  let output = car.getAll();
  res.status(output.status).send(output.body);
});

router.get('/car/:id', (req, res) => {
  let output = car.returnCarById(req.params.id);
  res.status(output.status).send(output.body);
});

router.put('/car/:id', (req, res) => {
  let output = car.updateCarById(req.params.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
  res.status(output.status).send(output.body);
});

router.delete('/car/:id', (req, res) => {
  let output = car.removeCarById(req.params.id);
  res.status(output.status).send(output.body);
});
module.exports = router;