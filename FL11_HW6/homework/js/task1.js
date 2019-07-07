const a1 = parseFloat(prompt('a1= ', ''));
const a2 = parseFloat(prompt('a2= ', ''));
const b1 = parseFloat(prompt('b1= ', ''));
const b2 = parseFloat(prompt('b2= ', ''));
const c1 = parseFloat(prompt('c1= ', ''));
const c2 = parseFloat(prompt('c2= ', ''));
const numberTwo = 2;
if ((a1+b1)/numberTwo===c1 && (a2+b2)/numberTwo===c2) {
    console.log(true);
} else {
    console.log(false);
}