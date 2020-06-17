const express = require('express');
const app = express()
const port = 3000

app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug')

app.get('/', function (req, res) {
     res.render('/home/dev/yousef-hammoudeh-training/project/execution/views/page.pug');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))