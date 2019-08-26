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
    


reverse('Akram Helil')


