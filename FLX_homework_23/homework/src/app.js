class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;
    this.discount = 0;
  }

  makeOrder() {
    const finalPrice = (this.orderTotalPrice - this.discount - this.bonus).toFixed(2);
    document.write(`Price after discount and including bonuses is ${finalPrice}`);
  }
}
const getDiscount = (user) => {
  const newUser = user;
  const date = new Date();
  const night = 23;
  const morning = 6;
  const Saturday = 6;
  const Sunday = 0;
  if (date.getHours() >= night || date.getHours() <= morning) {
    newUser.discount += newUser.nightDiscount;
  } else if ((date.getDay() === Saturday) || (date.getDay() === Sunday)) {
    newUser.discount += newUser.weekendDiscount;
  }
  return newUser.discount;
};
const setBonus = (user) => {
  const newUser = user;
  if (user.orderTotalPrice % 100 === 0) {
    for (let i = 0; i < (newUser.orderTotalPrice / 100); i += 1) {
      newUser.bonus += 5;
    }
  }
};
const Yarik = new User('Yarik', 500, 0.2, 0.5, 0);
setBonus(Yarik);
getDiscount(Yarik);
Yarik.makeOrder();
