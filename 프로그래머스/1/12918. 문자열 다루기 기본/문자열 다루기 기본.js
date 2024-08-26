function solution(s) {
    // s = "321"
    // console.log(s)
    let answer = true;
    let arr = [];
    
    //문자열길이확인(s.length)
    if(s.length === 4 || s.length === 6){
        arr = s.split('')
        console.log(arr)
        answer = arr.every((num)=> Number.isInteger(parseInt(num)) === true)
        console.log(answer)
        if(!answer){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}