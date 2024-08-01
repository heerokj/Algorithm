function solution(s) {
    let answer = '';
    let val = Math.floor(s.length / 2);
    if(s.length % 2 !== 0){
        answer = s[val];
        return answer
    }else{
        answer = s[val-1] + s[val];
        return answer
    }
}