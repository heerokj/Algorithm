function solution(n) {
    let answer = [];
    let reverseArr = [];
    
    answer = (n+"").split("").reverse();
    
    for(let i = 0; i < answer.length; i++){
        reverseArr.push(parseInt(answer[i]))
    }
    return reverseArr;
}