const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookieSignature = require('cookie-signature');

// define port
const port = 3000;

// define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret-key'));



// Define routes
app.get('/signingcookie', (req, res) => {
    res.cookie('paket', 'kaos', { signed: true });
    
    const secretCode = cookieSignature.sign('Rossi Stark', 'genius-key');
    console.log(cookieSignature.unsign(secretCode, 'genius-key'));

    res.cookie('secret code', secretCode, { signed: true });
    res.send('Signed cookie');
});

app.get('/verifycookie', (req, res) => {
    // const cookie = req.cookies;
    const cookie = req.signedCookies;
    res.send(cookie);
})

app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));
app.use('/admin', require('./routes/admin'));


// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});