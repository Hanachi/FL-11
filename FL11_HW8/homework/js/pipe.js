function addOne(x){
    return x + 1;
}
function pipe(num,...argsFunc){
    num = arguments[0];
    for (let i = 0; i < argsFunc.length; i++){
        num = argsFunc[i](num);
    }
    return num;
}

pipe(1,addOne);
pipe(1,addOne,addOne);