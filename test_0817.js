/*日期：2017/08/17
 题目：为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
 要求：不要使用for，while循环
 */

function squareNum(arr){
    let newArr = [];
    arr.forEach(function(element) {
        newArr.push(Math.pow(element,2));
    });
    return newArr;
}

arr = [5, 3, 7, 1];
console.log('数组 arr = ' + arr + ' 中元素的二次方： ' + squareNum(arr));
