function solution(left, right) {
    let sum = 0;
    // left부터 right사이의 수
    for(let i = left; i <= right; i++){
        //약수의 개수가 홀수 Math.sqrt(x); 
        if(Math.sqrt(i) % 1 === 0){
            sum -= i
        //약수의 개수가 짝수 
        }else{
            sum += i
        }
    }
    return sum;
}
