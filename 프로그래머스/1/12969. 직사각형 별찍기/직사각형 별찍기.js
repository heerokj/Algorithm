process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //console.log(a);//5
    //console.log(b);//3
    for(let i = 0; i < b; i++){ //몇줄만큼 반복 => b줄만큼 출력(=3줄)
        let star = ""
        for(let j = 0; j < a; j++){ //한번에 5개씩 => 변수에 *를 더하기  
           star = star + "*"
        }
         console.log(star); //줄마다 한번에 출력
    }   
});