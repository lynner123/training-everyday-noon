/*日期：2017/08/26
 题目：
 给定编码如下，给出一个整数,返回解码方法的种数；
 例如：
 给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
 1-> 'A’
 2-> ‘B’
 …
 26-> ‘Z’
 */
let num1 = 0,num2 = 3, num3 = 18, num4 = 32,num5 = 132,num6 = 130;num7 = 3427;
console.log(`输入数字： ${num1} ,编码方式有 ${codeOfNum(num1)} 种.`);
console.log(`输入数字： ${num2} ,编码方式有 ${codeOfNum(num2)} 种.`);
console.log(`输入数字： ${num3} ,编码方式有 ${codeOfNum(num3)} 种.`);
console.log(`输入数字： ${num4} ,编码方式有 ${codeOfNum(num4)} 种.`);
console.log(`输入数字： ${num5} ,编码方式有 ${codeOfNum(num5)} 种.`);
console.log(`输入数字： ${num6} ,编码方式有 ${codeOfNum(num6)} 种.`);
console.log(`输入数字： ${num7} ,编码方式有 ${codeOfNum(num7)} 种.`);

 function codeOfNum(input) {
     let result = 0;
    if(input === 0){
        return result;
    }else if(input <= 10){
        return result+1;
    }else{
        return calculateNum(input.toString());
    }

 }
function calculateNum(str) {
     let count = 0;
    if(str.includes('0')){
        return count;
    }
    count++;
    for (let i = 0; i <= str.length-2; i+=2) {
        let double = str[i]+str[i+1];
        if(double>26){
            return count;
        }
    }
    return count += 1;
}
