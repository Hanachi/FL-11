function reverseNumber(num){
    let reversedNumber = 0;
    while(num !== 0){
        reversedNumber *= 10;
        reversedNumber += num % 10;
        num -= num % 10;
        num /= 10
    }
    return reversedNumber;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);