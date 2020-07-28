function mult(a,b){
    return a*b;
}
console.log(mult(4));

var multDef=(a = 1, b = 1) => {
    return a * b;
}
console.log(multDef(undefined,4));

var multDef2 = (a = 1, b = a) => {
    return a * b;
}
console.log(multDef2(4));

var multDef3 = (c = 1, d = 1) => {
    return c * d;
}
console.log(multDef3(undefined, 5));

function randonNumber(){
    return Math.random()*10;
}

var multDef4 = (c, d = randonNumber()) => {
    return c * d;
}
console.log(multDef4(5));