/*日期：2017/08/23
 题目：
 给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
 给定 [1,2,[1,2]]，返回 [1,2,1,2]。

 给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
 给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
 */
let array1 = [1,2,[1,2]];
let array2 = [1,2,[1,2],[3,4]];
let array3 = [4,[3,[2,[1]]]];

function flattenArr(array) {
    let result = array.reduce(function(a, b) {
                let mid = b;
                if(Array.isArray(mid)){
                    mid = flattenArr(mid);
                }
                return a.concat(mid);
    }, []);
    return result;
}

console.log(flattenArr(array1));
console.log(flattenArr(array2));
console.log(flattenArr(array3));