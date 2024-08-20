function solution(arr) {
    let filtered  = [];
    let minVal = 0;
    
    // 작은 수 구하기
    minVal = Math.min(...arr) 
    // 작은 수만 제거하기
    filtered = arr.filter((e) => e !== minVal) // 한줄이고 리턴있으면 {} 생략!**
    // 빈 배열인 경우
    if(filtered.length === 0){
        return [-1]
    }else{
        return filtered
    }
}