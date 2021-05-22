//write a function that contains numbers in sorted order, returns the number of unique items
let countUnique = arr => {
    arr.sort()
    let i = 0;
    let j = 1
    while (j < arr.length) {
        if (arr[i] != arr[j]) {
            ++i
            arr[i] = arr[j]
        }
        j++
    }
    console.log(arr);
    return i+=1
}

console.log(countUnique([1,1,3,5,5,6,7,9]))