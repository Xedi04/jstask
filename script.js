//1:
const array1 = [1, 2, 3, 4,5,7,8]
const number1=4;

const myFunc = function(array, number1){
    let newarray = [];

    for (let i = 0; i <=number1-1; i++) {
        newarray.push(array1[i]);

    }console.log(newarray);

}

 myFunc(array1,number1);


// 2:

const number2 = 5
const limit = 30;
const findMultiples = function (number2, limit) {
    let yeniarray = [];
    for (let i= number2; i <= limit; i*=2) {
        yeniarray.push(i);

    }
    console.log(yeniarray);
}
findMultiples(number2, limit);




// 3:

let number3=10;
const count = function(number3){
    let carray=[];
    for( let i=1; i<number3; i++){
        carray.push(i);
    }console.log(carray);
}
count(number3);



