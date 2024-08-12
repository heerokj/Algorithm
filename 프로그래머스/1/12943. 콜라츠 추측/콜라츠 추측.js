function solution(num) {
    let count = 0;
        
    for(let i = 0; i < 500; i++){
        
        if(num === 1){
            count = 0;
            break;
        }
        
        if(num % 2 === 0){
            num = num / 2;
            count += 1;
            if(num === 1) break;
        }else{
            num = (num * 3) + 1;
            count += 1;
        }
    } 
    
    if(num !== 1) count = -1
    return count;    
}