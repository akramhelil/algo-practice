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
       // const charObj = {};
    // let max = 0 
    // let maxChar = ''

    // // transfer the string to an object depends on the how many times the character showed up in the string
    // for (let char of str) {
    //     if (charObj[char]) {
    //         charObj[char] ++;
    //     } else {
    //         charObj[char] = 1;   
    //   }
    // }

    // // loop through the obj and find the max value of the obj.
    // for (let obj in charObj) {
    //     if (charObj[obj] > max) {
    //         max = charObj[obj]
    //         maxChar = obj;
    //     }
    // }
    // return maxChar;

    // solution 2
    let max = 0;
    let maxChar = '';
    // split the string and go through wit hfor each loop array method, then split the string one more time with specific cacachter from the for eachloop(clousure)
    // then assign it to the max value of the length of that character repeated and also assign the same charcster to the Max Charactor 
  str.split('').forEach( char => {
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;

}

// FIZBUZZZZZ 
function fizzBuzz(num) {
    // my solution  modulo operator % 
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}








