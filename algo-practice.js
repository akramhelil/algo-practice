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
    }

reverse('Akram Helil')


