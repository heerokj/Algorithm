function solution(strings, n) {
    var answer = [];
    let arr1 = [];
    let a ='';
    let b ='';

    //1.배열의 모든 요소 구하기

    //2.요소위 n번째 문자 구하기
 
    //3.각 요소 앞에 인덱스에 해당하는 문자를 붙인다

    //4.배열에 넣기
    for(let i=0; i < strings.length; i++){
        
        a = strings[i].slice(n,n+1) + strings[i]
        arr1.push(a);
        
    }
    
    //5.정렬하기
    arr1.sort();

    //6.정렬된 배열의 가장 앞 글자 떼기 & 배열에 넣기
    arr1.forEach(function(arr1){

        b = arr1.substring(1)  
        answer.push(b);
        
    })

    return answer;
}