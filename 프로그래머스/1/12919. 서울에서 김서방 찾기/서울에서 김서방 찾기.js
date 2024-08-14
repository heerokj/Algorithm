function solution(seoul) {
    let answer = '';
    let kimIdx = seoul.findIndex((data) => data === "Kim")
    answer = "김서방은 "+ kimIdx + "에 있다"
    return answer;
}