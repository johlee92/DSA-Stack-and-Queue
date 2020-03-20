//exercse 1 - creating the class and using the class
let starTrek = new Stack;
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
console.log(starTrek);

//exercise 2 - adding methods to Stack
console.log(`exercise 2 \n${starTrek.peak()}`);
console.log(`exercise 2 \n${starTrek.isEmpty()}`);
console.log(`exercise 2 \n${starTrek.display()}`);
console.log(`exercise 2 \n${starTrek.pop()}`);
console.log(`exercise 2 \n${starTrek.pop()}`);

//exercise 3 - check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let tempStack = new Stack;
    for (i=0; i<s.length; i++) {
        tempStack.push(s[i])
    }
    console.log(tempStack)
    let reverseS = '';
    while(!tempStack.isEmpty()) {
        reverseS = reverseS + tempStack.pop();
    }
    console.log(reverseS)
    if (s === reverseS) {
        return true;
    }
    return false;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//exercise 4 - matching parentheses in an express
