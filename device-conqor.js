// write a program to search an element index. Note in Binary Search

let binarySearch = (arr, element) => {
    let min = 0
    let max = arr.length - 1
    
    while (min <= max) {
        let middle = Math.floor((max + min) / 2)
        if (arr[middle] == element)
            return middle
        else if (arr[middle] < element) {
            min = middle+1
        } else {
            max = middle -1
        }
    }
    return -1
}


console.log(binarySearch([1,2,3,4,5,6,7,8,43,55,77,88,90],0))