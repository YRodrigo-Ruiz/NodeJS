const numbers = [2,8,9,10,45,0,1]

// const toDouble = numbers.map((element) => element * 2).filter((e) => e>40);
// console.log(toDouble);

// const mayores40 = toDouble.filter((element) => element<40);
// console.log(mayores40);

// const total = numbers.reduce((prevValue,currValue) => prevValue + currValue);
// console.log(total);

let aux = []
numbers.forEach((elem,index) => {
    if((index%2)==0){
        aux.push(elem*2);
    }
});

console.log(aux);