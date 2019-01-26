# estimated-read-time

[![NPM](https://img.shields.io/npm/v/estimated-read-time.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/estimated-read-time)    [![Github](https://img.shields.io/github/release/karthik512/estimated-read-time.svg?colorB=green&logo=github&style=flat-square)](https://github.com/karthik512/estimated-read-time)

`estimated-read-time` helps to estimate the time taken to read a content.

## Installation

```sh
npm install estimated-read-time --save
```

## Usage

```javascript
var readtime = require('estimated-read-time');

var seconds = readtime.text(content);
//Returns the seconds taken to read the content
```

## API

`text(content, options)`

  - `content`: the text to analyze
  - `options.MIN_WORD_LEN`: Avg Length of one word which will be used to count the no. of words in the content. <b>(Default: 4)</b>
  - `options.WPM`: Words Per Minute a person can read. <b>(Default: 265)</b>
