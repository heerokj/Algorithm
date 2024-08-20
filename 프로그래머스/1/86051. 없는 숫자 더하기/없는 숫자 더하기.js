function solution(numbers) {
    let trueFlase = false;
    let findArr = [];
    
    // 배열에서 찾을 수 없는 값 찾기 & 찾아서 배열에 넣기
    for(let i = 1; i <= 9; i++){
       trueFlase = numbers.includes(i)
        if(trueFlase === false) findArr.push(i)
    }
    // 값들 다 더하기
    return findArr.reduce((a,b) => a+b, 0);
}