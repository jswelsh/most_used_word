function most_used_word(str) {
    let wordCounts = { };
    let words = str.split(/\s/);
    for(let i = 0; i < words.length; i++) {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }
    Object.keys(wordCounts).forEach(word => {
        document.write(word + ": " + wordCounts[word] + ".")
    })
    console.log(wordCounts)
}

most_used_word('alpha bravo alpha delta bravo alpha charlie charlie golf charlie foxtrot charlie')  