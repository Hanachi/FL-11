const a = parseFloat(prompt('a = ', ''));
const b = parseFloat(prompt('b = ', ''));
const c = parseFloat(prompt('c = ', ''));

if (a+b>c && a+c>b && b+c>a) {
    if (a===b && b===c && a===c) {
        console.log('Equivalent triangle');
    } else if (a===b || b===c || a===c) {
        console.log('Isosceles triangle');
    } else if (a!==b && b!==c && a!==c) {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}
