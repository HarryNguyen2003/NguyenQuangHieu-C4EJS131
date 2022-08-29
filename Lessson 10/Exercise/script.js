const changeColor = document.querySelector(".changeColor");
const bgrColor = document.querySelector('.bgrColor');
const btnColor = document.querySelector('.buttonColor');

// Create value for 3 value of rgb(colorV1,colorV2,colorV3);
let colorV1,colorV2,colorV3;

// Create function to random 3 value of rgb();
let valueColor = function(){
    colorV1 = Math.trunc(Math.random()*256+1);
    colorV2 = Math.trunc(Math.random()*256+1);
    colorV3 = Math.trunc(Math.random()*256+1);
};

// Listen click event 
btnColor.addEventListener('click',function(){
    // call function valueColor
    valueColor();

    // add style Attribute for bgrColor 
    bgrColor.setAttribute("style",`background-color:rgb(${colorV1},${colorV2},${colorV3})`);
});

/*--------------------------------------HomeWork 2-------------------------------------------------*/

const changeValue = document.querySelector('.changeValue');
const btnValue = document.querySelector('.btnValue');
const btn = document.querySelector('#btn');
let valueBtn = document.querySelector('#btn').innerHTML;``
let plusText = function(){

}
btnValue.addEventListener('click',function(){
    btn.innerHTML = ++valueBtn;
})