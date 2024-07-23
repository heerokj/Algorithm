let solution = (s) => {

    let val = 0;
    
    for (let i = 0; i < s.length; i++){

        if(s[i] === 'p' || s[i] === 'P'){
            val += 1;
        }else if(s[i] === 'y' || s[i] === 'Y')
            val -= 1;
    }
    
    if(val === 0){
        return true;
    }else{
        return false;
    } 
    
}