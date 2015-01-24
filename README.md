# bookmarkletify

convert javascript source into the format needed for a bookmarklet

## Usage

As a **module**

```sh
npm install bookmarkletify

```

```js
var bookmarkletify = require('bookmarkletify');
var source = 'alert( window.location    )';
var bookmarkletString = bookmarkletify(source);

console.log(bookmarkletString); //javascript:(function(){;alert(window.location);})()
```

or as a **command line tool**

```sh
npm install -g bookmarkletify
bookmarkletify input.js -o output.bookmarklet

```

## license

MIT
