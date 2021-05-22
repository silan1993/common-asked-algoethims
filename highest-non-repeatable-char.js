
// write a program that find the highest consecutive non repeatable character

let checkMaxNonRepeatChar = str => {
    let maxChar = ''
    let lastChar = ''
    let tempChar = ''
    if (str.length < 1)
        return ''
    let i = 0
    while (i < str.length) {
        if (lastChar == str[i]) {
            if (tempChar.length > maxChar.length)
                maxChar = tempChar
            tempChar = ''
            lastChar = ''
        }
        else {
            tempChar += str[i]
            lastChar = str[i]
            i++
        }
       
    }
    if (tempChar.length > maxChar.length)
                maxChar = tempChar
    return maxChar
}

console.log(checkMaxNonRepeatChar("sialaannasilsn"));
