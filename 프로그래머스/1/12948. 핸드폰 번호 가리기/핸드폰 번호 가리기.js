function solution(phone_number) {
    var answer = '';
    
    // 문자열 자르기
    let num2 = phone_number.slice(0,phone_number.length-4)
    let num1 = phone_number.slice(-4)
    // *로 대체
    let value = "*".repeat(num2.length);
    // *로 변경한 부분과 붙이기
    answer = value + num1;

    return answer;
}