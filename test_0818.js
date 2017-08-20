/*日期：2017/08/18
 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
 要求：不要使用for，while循环
 */

let arr = [1, 3, 7, 1 ,4,];
let item = 1;
function findIndex(arr,item) {
    // let indexArr = arr.map((ele,index) =>{
    //     if(ele === item){return index;}
    //     // return -1;
    // });
    let indexArr = arr.filter((ele,index) =>{
        if(ele !== item){
            return arr.indexOf(ele);
        }
        return index;
    });

    return indexArr;
    // return indexArr.filter(num => num>-1).toString();
}

console.log('数组 arr = ' + arr + ' 中元素item = ' + item + ' 出现的位置： ' + findIndex(arr,item));