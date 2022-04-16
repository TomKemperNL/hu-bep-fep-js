const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs/promises');

app.use(express.static('./public'));

if(process.env.NODE_ENV === 'production'){
    fs.access('./public/index.html').catch(err => {
        console.log('Index.html ontbreekt. Run eerst "npm run build" in de client-folder!');
    })
}else{    
    console.log('Not in production mode, so allowing CORS requests');
    app.use(cors());
}

app.get('/ajaxdemo', (req, res) => {
    res.json({ message: 'hello world' })
});

app.listen(3000, () => {
    console.log('app started')
})