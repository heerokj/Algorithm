function solution(s) {
    let answer = "";
    let word = "";
    
    let words = s.split(" ")    
    for(let i = 0; i < words.length; i++){
        word = words[i]
        for(let j = 0; j < word.length; j++){
            //짝수번째 일때
            if(j % 2 === 0){
                answer += word[j].toUpperCase();
            //홀수번째 일때
            }else{     
                answer += word[j].toLowerCase();
            }            
        }
        //단어끝날때마다 공백 넣기
        answer += " ";
    }  
    answer = answer.slice(0, -1)
    return answer;
}