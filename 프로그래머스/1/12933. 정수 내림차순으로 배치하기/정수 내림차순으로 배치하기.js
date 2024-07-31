function solution(n) {
    var value = (n+"").split("").sort((a, b) => b - a).join('');
    var answer = parseInt(value);
    
    return answer;
}