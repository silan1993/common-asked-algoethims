let validate = str => {
    let map = {
        "}": "{",
        "]": "[",
        ")":"("
    }
    let validArray = []
    let valid = true
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '{' || str[i] == '[' || str[i] == '(')
            validArray.push(str[i])
        else
            if (str[i] == '}' || str[i] == ']' || str[i] == ')') {
                let lastElement = validArray.pop()
                if (lastElement != map[str[i]]) {
                    valid = false
                    break
                }
            }
        
    }
    if (validArray.length > 0) {
        valid = false
    }
    return valid
}

console.log(validate('()()((()'))