/*日期：2017/08/19
 数组去重
 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */

let arr = ['s', 'a', 's', 'b', 'a',1,'1',1];
function removeRepeat(arr) {
    return [...new Set(arr)];
}

console.log( removeRepeat(arr));