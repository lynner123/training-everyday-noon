/*日期：2017/08/08
 题目：题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。*/

function main(num){

    let str = '';
    
    for(let i = 2; i<= num; i++){
        while(num % i === 0){
            num /= i;
            str += i;
        }
    }
    
    return str;
 }

console.log('90 = ' + main(90));
