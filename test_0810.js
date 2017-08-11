/*日期：2017/08/10
 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
 eg: function findNum(arr){ ... }*/

function findNum(arr){
    let array = 0;
    for(let item of arr) {
        for (let term of arr) {
            if (term === item) {
                array += 1;
            }
        }
        if (array === 1){
            return item;
        }
        array = 0;
    }
}

let arr = [1, 3, 6, 3, 8, 1, 9, 9, 8 ];
console.log(findNum(arr));