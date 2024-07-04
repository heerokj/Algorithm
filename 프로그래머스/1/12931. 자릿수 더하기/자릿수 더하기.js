function solution(n)
{
    // 정수 -> 문자열로 변경
    let str = String(n);
    // element를 문자열에서 정수로 변경
    let mapfn = (arg) => Number(arg)
    // 문자열 -> 배열로 변경
    let newArr = str.split('').map(mapfn)
    //요소를 하나의 값으로 변경
    answer = newArr.reduce((a,b) => a+b, 0);

    return answer;
}