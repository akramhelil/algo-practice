// reverse a string
function reverse(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return console.log(reversed);
    
}

reverse('Akram Helil')


