function solution(array, commands) {
    let answer = [];
    let array2 = [];

    for(let i = 0; i < commands.length; i++){
        
        array2 = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)
        answer.push(array2[commands[i][2]-1])
    }
    return answer;
}