function solution(x) {
    let answer = true;
    let arr = [];
    let sum = 0;

    const str = String(x);
    arr = Array.from(str);
    sum = arr.reduce((acc, curr) => {return parseInt(acc) + parseInt(curr)}, 0);
    answer =  (x % sum  === 0) ? true : false
                     
    return answer;
}