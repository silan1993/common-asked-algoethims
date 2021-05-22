// wrigte a function which accepts 2 args,1st is list of numbers and 2nd one n is number of consecutive . So calcukate the max sum of n consecutive elements of the list
// ex  maxSubArraySum([1,2,3,4,5,6,7,1,6],2)    output:- 13 (6+7)

let maxSubArraySum = (arr, num) => {
    if (num > arr.length)
        return null
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (j = 0; j < num; j++){
            temp += arr[i+j]
        }
        if (temp > max)
            max = temp
        
    }
    return max
}



console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 1, 6], 4))


// Here the complexcity will be O(N^2)

// So there is refactor code which will reduce the complecity to O(N).

// logic is  ([1,2,3,4,5,6],3) from here 1st time add 1st 3 number. next time onwards add the next element and remove the 1st element



let maxSubArraySum2 = (arr, num) => {
    let maxSum = 0
    let tempSum = 0
    if (num > arr.length)
        return null
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum= Math.max(maxSum,tempSum)
    }

    return maxSum
}

console.log(maxSubArraySum2([3, 4, 5, 2, 4, 7, 3, 8, 9, 4, 7], 4))
