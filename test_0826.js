/*日期：2017/08/26
 题目：
 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
 如果这个数被3整除，打印fizz.
 如果这个数被5整除，打印buzz.
 如果这个数能同时被3和5整除，打印fizz buzz.
 */

function printFizzBuzz(n) {
    if(n%15 === 0){
        return 'fizz buzz';
    }else if(n%3 === 0){
        return 'fizz';
    }else if(n%5 === 0){
        return 'buzz';
    }else{
        return '';
    }
}
let num1 = 45; num2 = 39; num3 = 55; num4 = 22;
console.log('输入整数 '+ num1 + ' 打印 '+ printFizzBuzz(num1));
console.log('输入整数 '+ num2 + ' 打印 '+ printFizzBuzz(num2));
console.log('输入整数 '+ num3 + ' 打印 '+ printFizzBuzz(num3));
console.log('输入整数 '+ num4 + ' 打印 '+ printFizzBuzz(num4));

