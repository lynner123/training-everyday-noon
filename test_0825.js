/*日期：2017/08/25
 题目：
将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].

    function XXX(arr,elem){ }
参数：
arr:数组
elem:某个元素
 */
let nums = [0, 1, 0, 3, 12];
target = 0;
function moveElem(arr,elem){
    let behind = [];
    let left = [];
    arr.forEach(function(a) {
        if(a === elem){
            behind.push(elem);
        }else{
            left.push(a);
        }
    }, []);
    return left.concat(behind);
}

console.log(moveElem(nums,target));