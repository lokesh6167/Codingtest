function findLongestWord(sentence) {
    let longestWord = '';
    let maxVowelCount = 0;
    const words = sentence.split(' ');
    const alphabeticRegex = /[a-zA-Z]/;
    for (const word of words) {
        let cleanedWord = '';
        let vowelCount = 0;
        for (const char of word) {
            if (alphabeticRegex.test(char)) {
                cleanedWord += char;
                if ('aeiouAEIOU'.includes(char)) {
                    vowelCount++;
                }
            }
        }
        if (cleanedWord.length > longestWord.length || cleanedWord.length === longestWord.length && vowelCount > maxVowelCount) {
            longestWord = cleanedWord;
            maxVowelCount = vowelCount;
        }
    }
    return longestWord;
}
