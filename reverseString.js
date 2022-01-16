const reverseString = function(str) {
    let output=''
    let str_array = str.split('')

    // console.log(str_array.pop())
    // console.log(str_array)
    // console.log(str_array.length)

    while(str_array.length !== 0){
        output = output + str_array.pop()
    }
    // console.log(output)
    return output
};

// reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
