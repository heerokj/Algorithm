function solution(sizes) {
    
    let w = [];
    let h = [];
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b) => a-b)
        w.push(sizes[i][0])
        h.push(sizes[i][1])
    }
    
    const maxW = Math.max(...w);
    const maxH = Math.max(...h);
    
    return maxW * maxH
}