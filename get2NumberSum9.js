let getTwoNumberSum9 = arr =>{
    let map ={}
    let num1 ,num2
    for(let element of arr){
        if(map[element]){
            num1 = map[element]
            num2 = element
            break;
        }else{
            map[9-element]= element
        }
    }
    return {num1,num2}
}

console.log(getTwoNumberSum9([2,7,11,15]))