function solution(n) {
    let answer = 0;
    let arr = []; // 나머지가 1이 되는 x값이 들어간 배열

    for(let i = 0; i <= n; i++){
        if(n % i === 1){
            arr.push(i);
        } 
    }
    // ES6 문법
    answer = Math.min(...arr); // 1
    return answer;    
}