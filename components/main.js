let vowelResult = document.getElementById('vowels-result');
let reverseResult = document.getElementById('reverse-result');

function vowelsFunction(word){
    const vowelsList = ['a','e','i','o','u','A','E','I','O','U'];
    let counter = 0;
    for(let i = 0; i < word.length; i++){
        for(let n = 0; n < vowelsList.length; n++){
            if(word[i] === vowelsList[n]){
                counter++;
            }
        }
    }
    vowelResult.textContent = counter;
}
function reverseFunction(word){
    let newWord = '';
    for(let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }
    reverseResult.textContent = newWord;
}