const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/ajaxdemo', (req, res) => {
    res.json({ message: 'hello world' })
});

app.listen(3000, () => {
    console.log('app started')
})