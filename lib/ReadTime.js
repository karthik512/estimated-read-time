function countWords(content, { MIN_WORD_LEN = 4 })
{
    let arr = content.split(' ');
    let count = 0;
    for(let i = 0;i < arr.length;++i) {
        count += arr[i].length/MIN_WORD_LEN;
    }
    return Math.round(count);
}

//Checks the Technical Difficulty and returns an appropriate WPM
function getWPM({ IS_TECHNICAL_DOC = false, TECH_DIFFICULTY = 3, WPM = 265})
{
    if(IS_TECHNICAL_DOC == true) {
        TECH_DIFFICULTY = (TECH_DIFFICULTY < 0) ? 0 : (TECH_DIFFICULTY > 5) ? 5 : TECH_DIFFICULTY;
        WPM -= (65 + (30 * TECH_DIFFICULTY));
        WPM = (WPM < 0) ? 50 : WPM; 
    }
    return WPM;
}

function countSeconds(wordCount, options)
{
    let WPM = getWPM(options);
    let seconds = (wordCount / WPM) * 60;
    return Math.ceil(seconds);
}

module.exports = {
    getReadTime: function(content, options) 
    {
        let word_count = countWords(content, options);
        let seconds = countSeconds(word_count, options);

        let result = { word_count, seconds };
        return result;
    }
}