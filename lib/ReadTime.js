function countWords(content, { MIN_WORD_LEN = 4 }) {
    let arr = content.split(' ');
    let count = 0;
    for(let i = 0;i < arr.length;++i) {
        count += arr[i].length/MIN_WORD_LEN;
        console.log(arr[i], count);
    }
    return Math.round(count);
}

function countSeconds(wordCount, { WPM = 265 }) {
    let seconds = (wordCount / WPM * 60);
    return Math.ceil(seconds);
}

module.exports = {
    getReadTime: function(content, options) {
        let wordCount = countWords(content, options);
        let seconds = countSeconds(wordCount, options);
        return seconds;
    }
}