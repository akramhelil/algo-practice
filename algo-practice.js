// reverse a string
function reverse(str) {
    // solution one 
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return console.log(reversed);
    
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
     return str.split('').every((char,i) => {
        return char === str[str.length - i - 1]
    })
}


// Reverse a integer for including the negative numbers
function reverseInt(n) {
    //my solutuon 
    let reversed = n.toString().split('').reverse('').join('');
    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);

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
       const charObj = {};
    let max = 0 
    let maxChar = ''

    // // transfer the string to an object depends on the how many times the character showed up in the string
    for (let char of str) {
        if (charObj[char]) {
            charObj[char] ++;
        } else {
            charObj[char] = 1;   
      }
    }

    // // loop through the obj and find the max value of the obj.
    for (let obj in charObj) {
        if (charObj[obj] > max) {
            max = charObj[obj]
            maxChar = obj;
        }
    }
    return maxChar;

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
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('bu-zz')
        } else {
            console.log(i)
        }
    }
}

 // Given an array and size attribute, group the array with the number of a size as a sub array.
// eg.   chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    // // solution one 
    // const chunked = []
    
    array.forEach(el => {
        const lastElChunked = chunked[chunked.length - 1]
        if (!lastElChunked || lastElChunked.length === size) {
            chunked.push([el])
        } else {
            lastElChunked.push(el)
        }
    })
    return chunked;



    // // solution 2 
    const chunked = [];
     for (let el of array) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([el])
        } else {
            last.push(el)
        }
    }
    return chunked;


    
    // // solution 3  with Slice utilizing the index 
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        let sliced = array.slice(index, index + size)
        chunked.push(sliced)
        index += size
    }
    return chunked;

 }


//  Check to see if two provided strings are anagrams of eachother.
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// soluction 1 
function anagrams(stringA, stringB) {
    // create cahrctor map for both strings 
    // build a helper function to make char map 
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;

}

function buildCharMap(str) {
    const charMap = {}

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
} 


// solution # 2
function anagrams(stringA, stringB) { 
    // Solution # 2 
    if (cleanString(stringA) === cleanString(stringB)) {
        return true
    } else return false;
}

// helper function 
function cleanString(str) {
    return str.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
}

/* --------------------------------------------------------*/

// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(str) {
    // solution #1
    const words = []
    for (let word of str.split(' ')) {
        words.push( word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}


// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // solution #1 
    // iterative solution 
    for (let row = 0; row < n; row++) {
        let stair = '';
        
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }

    //  recursion solution 
    let row = 0; 
    let stair = '';

    if (n === row) {
        return; 
    }

    if (n === stair.length) {
        console.log(stair)
        row++
        return step(n)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    stair(n )
}


// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // recursion to pass through  the information 
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }
    //  Validate funtion calls will be the one that will do the recursive funtion calls 
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !vaildate(node.right, node.data, max)) {
        return false;
    }

    return true;
}


Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    // base case
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1);
    }


    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level+add);
}





// Solution one! 
// function pyramid(n) {
//     // midpoint index
//     const midPoint = Math.floor((2 * n - 1) / 2); 

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2*n - 1; column++) {
//             if (midPoint - row <= column && midPoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
        
//         console.log(level) 
//     }
// }


// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const checkerStr = ['a','e','i','o','u'];

    for (let char of str.toLowerCase()) {
        if (checkerStr.includes(char)) {
            count++;
        }
    }
    
    return count;
}




