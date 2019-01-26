const ReadTime = require('./ReadTime');

module.exports = {
    text: function(content, options) {
        options = !options? {} : options;
        return ReadTime.getReadTime(content, options);
    }
}