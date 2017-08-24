/*日期：2017/08/23
 题目：
实现一个left-pad函数
leftpad功能，就是字符串前面拼指定字符到固定长度，比如
leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
三个参数，
第一个：当前字符串；
第二个：需要返回字符串的长度
第三个：用来拼接的字符串
*/
let arr1 = ['hello',20,'1'];
let arr2 = ['hello',21,'12'];

function left_pad(arr) {
    let str = '';
    for (let i = 0; i < parseInt((arr[1]-arr[0].length)/arr[2].length); i++) {
        str += arr[2];
    }
    return str+arr[0];
}

console.log('arr1=' + arr1+',返回值为：\n '+ left_pad(arr1));
console.log('arr2=' + arr2+',返回值为：\n '+ left_pad(arr2));

