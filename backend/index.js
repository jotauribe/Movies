const Express = require('express');
const app = Express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello Worl!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
