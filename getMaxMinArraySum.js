function miniMaxSum(arr) {
    arr.sort()
    // Write your code here
    let num = 4
    let tempMin = 0
    let tempMax = 0

    let max =0
    let min =0
    if(arr.length < 4)
        console.log(0,0)
    else{
    for(let i =0;i<num;i++){
        max += arr[i]
        min  += arr[i]
    }
    
    tempMax = max
    tempMin = min
    let eliminate = 0 
    for(let j=num;j<arr.length;j++){
        tempMin = tempMin - arr[eliminate] + arr[j]
        tempMax = tempMax - arr[eliminate] + arr[j]
        max = Math.max(max,tempMax)
        min = Math.min(min,tempMin)
        eliminate++
    }
    console.log(min,max)
    }
}

miniMaxSum([7,69,2,221,8974])