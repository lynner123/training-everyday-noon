/**
 * Created by Administrator on 2017/8/8.
 */
function main(num){

    let str = '';
    
    for(let i = 2; i<= num; i++){
        while(num % i === 0){
            num /= i;
            str += i;
        }
    }
    
    return str
 }

console.log('90 = ' + main(90));
