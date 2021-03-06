/*日期：2017/08/09
 题目：查找斐波纳契数列中第 N 个数。

 所谓的斐波纳契数列是指：
 前2个数是 0 和 1 。
 第 i 个数是第 i-1 个数和第i-2 个数的和。
 斐波纳契数列的前10个数字是：
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …*/

function main(N) {
    let result = 0;
    if(N === 1){
       return console.log('斐波纳契数列中第 '+ N +' 个数为：' + result);
    }else if(N ===2) {
        result = 1;
       return console.log('斐波纳契数列中第 '+ N +' 个数为：' + result);
    }

    let n0 = 0;
    let n1 = 1;
    let i = 3;
    while(i <= N) {
        result = n0 + n1;
        n0 = n1;
        n1 = result;
        i++;
    }
    console.log('斐波纳契数列中第 '+ N +' 个数为：' + result);
}

main(1);
main(2);
main(3);
main(4);
main(5);
main(6);
main(20);