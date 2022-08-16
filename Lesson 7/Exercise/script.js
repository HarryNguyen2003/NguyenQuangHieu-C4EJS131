
// const myArr = [1,2,3,4,5,6,7,8,9,10];
// myArr.push(11,12,14);
// const divisible2 = [];
// const notDivisible2 = [];


// for(let i = 0;i<myArr.length;i++ ){
//     // add number divisible 2 in array divisible2;
//     if( i%2 == 0){
//         divisible2.push(myArr[i]);
//     }
// }

// console.log(`All numbers of array : ${myArr}
// The numbers divisible 2 : ${divisible2}`);


let a=1 , b=-6 , c = 5;

let delta,x;

delta = (b*b) - (4 * a * c);

if(delta == 0){
    x = (-b) / (2*a);
    console.log(x);
}else{
    if(delta < 0){
        x = 'Phuong trinh vo nghiem';
        console.log(x);
    }else{
        console.log(((-b) + Math.sqrt(delta))/ (2*a),(-b - Math.sqrt(delta))/ (2*a))
    }
}