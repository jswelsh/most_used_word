
/* function most_used_word(str) {
    let wordCounts = { };
    let words = str.split(/\s/);
    for(let i = 0; i < words.length; i++) {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
    Object.keys(wordCounts).forEach(word => {
        document.write(word + ": " + wordCounts[word] + ".")
    })
    console.log(wordCounts)
} */
/* 
function most_used_word(str) {
    let wordCounts = { };
    let mostUsedWord = "";
    let mostUsedWordCount = 0;
    str.split(/\s/).forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    Object.keys(wordCounts).forEach(word => {
        //document.write(word + ": " + wordCounts[word] + ".")
        if(wordCounts[word] > mostUsedWordCount) {
            mostUsedWord = word;
            mostUsedWordCount = wordCounts[word]
        }
    })
    document.write(mostUsedWord + " was used " + mostUsedWordCount + " times.")
    console.log(wordCounts)
} 
 */

function most_used_word(str) {
    let wordCounts = { };
    let mostUsed = {word: '', wordCount:0}

    str.split(/\s/).forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        if(wordCounts[word] > mostUsed.wordCount) {
            mostUsed.word = word;
            mostUsed.wordCount = wordCounts[word]
        }
    });
    document.write(mostUsed.word + " was used " + mostUsed.wordCount + " times.")
    console.log(wordCounts)
} 

most_used_word('alpha bravo alpha delta bravo alpha charlie charlie golf charlie foxtrot charlie')  