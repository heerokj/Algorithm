function solution(x, n) {
    let answer = [];
    let a = 0;

    for(let i = 1; i <= n; i++){                
        a += x;
        answer.push(a);
    }
    return answer;
}