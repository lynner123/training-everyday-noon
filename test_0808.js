/**
 * Created by Administrator on 2017/8/8.
 */

    let num = 90;
    let str = '';
    
    for(let i = 2; i<= num; i++){
        while(num % i === 0){
            num /= i;
            str += i;
        }
    }
    console.log('90 = ' + str);
