function teste(value){
    console.log(value);
}
teste("Saudação!");

var log = function(value){
    console.log(value);
}
log('Hallo!')

var log = function(value){
    return value+1;
}
console.log(log(1));

let sum=function(a,b){
    return a+b;
}
console.log(sum(1,2))

let sumArrow=(a,b)=>a+b
console.log(sumArrow(3,4))

var arrowF = (a,b)=>{
    return a+b;
}
console.log(arrowF(4,6))

var elevarQuadrado = c => c*c
console.log(elevarQuadrado(3));