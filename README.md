# bookmarkletify

convert javascript source into the format needed for a bookmarklet


# example

``` js
var bookmarkletify = require('bookmarkletify');
var source = 'alert( window.location    )';
var bookmarkletString = bookmarkletify(source);

console.log(bookmarkletString); //javascript:(function(){;alert(window.location);})()
```

# install

With [npm](https://npmjs.org) do:

```
npm install bookmarkletify
```

# license

MIT
