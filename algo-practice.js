// reverse a string
function reverse(str) {
    // solution one 
    // let reversed = "";
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return console.log(reversed);
    
    // solution two
    const reversed =  str.split('')
        .reverse()
        .join('')
    return console.log(reversed);
}

// check the word is palindrome or not
function palindrome(str) {
    //  my solution 
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed === str ? true : false;

     // solution 2
    //  return str.split('').every((char,i) => {
    //     return char === str[str.length - i - 1]
    // })
}


// Reverse a integer for including the negative numbers
function reverseInt(n) {
    //my solutuon 
    // let reversed = n.toString().split('').reverse('').join('');
    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

    // solutution 1 
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
     // Math.sign() will detect the number is negative or positive 
    return parseInt(reversed) * Math.sign(n)
}

//  return the character that used the most in the string 


// What is the most common character in the string? 
// Dose String A have the same chatacters as string B(is iy an anagram?)
// Dose the given string have any repeated chatacters in it?ß)
function maxChar(str) {
    // my solution 
}







