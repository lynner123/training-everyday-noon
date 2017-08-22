/*日期：2017/08/22
 题目：
 计算两个数组的交数组
 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log("两个数组的交数组:");
console.log(intersectArr(nums1, nums2));

function intersectArr(nums1, nums2) {
    let arr = findEle(nums1, nums2);
    let result = calculateCount(arr);
    return push(result);
};
function push(result) {
    let arr = [];
    result.forEach(function (obj) {
        for (let i = 0; i < obj.count; i++) {
            arr.push(obj.key);
        }
    });
    return arr;
};
function calculateCount(arr) {
    let result = [];
    arr.forEach(function (ele) {
        let count1 = 0, count2 = 0;
        nums1.filter(num => {
            if (num === ele) {
                count1++
            }
        });
        nums2.filter(num => {
            if (num === ele) {
                count2++
            }
        });
        result.push({key: ele, count: count1 < count2 ? count1 : count2});
    });
    return result;
}
function findEle(nums1, nums2) {
    let arr = [];
    nums1.forEach(function (num) {
        if (nums2.includes(num) && !arr.includes(num)) {
            arr.push(num);
        }
    });
    return arr;
}

