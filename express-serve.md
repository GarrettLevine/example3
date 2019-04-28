
## Serving Content From Route Handlers

### Inline HTML Content
```javascript
// server.js
'use strict';

const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', (req, res, next) => {
  res.send('<h1>Root Route Page</h1>');
});

app.get('/other-url', (req, res, next) => {
  res.send('<h1>Other Route Page</h1>');
});

app.get('*', (req, res, next) => {
   res.status(404).send("Sorry, that web page doesn't exist 🤷🏻‍");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
```

### Static File HTML Content
```html
<!-- index.html -->
<html>
  <head>
    <title>HackerYou - Day 8 - Example 2</title>
  </head>

  <body>
    <h1>Root Route - index.html</h1>
  </body>
</html>
```

```javascript
// server.js
'use strict';

const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('*', (req, res, next) => {
   res.status(404).send("Sorry, that web page doesn't exist 🤷🏻‍");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
```

### Static Middleware Content
```
project/
├── public/
│   ├── about.html
│   └── index.html
├── server.js
└── package.json
```

```html
<!-- index.html -->
<html>
  <head>
    <title>HackerYou - Day 8 - Example 2</title>
  </head>

  <body>
    <h1>Root Route - index.html</h1>
  </body>
</html>
```

```javascript
// server.js
'use strict';

const express = require('express');
const app = express();

const PORT = 3030;

app.use('/', express.static('public'));

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
```
