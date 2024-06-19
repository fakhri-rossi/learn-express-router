const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { user = 'no-name', token = '' } = req.cookies;
    console.log(user);
    res.send(`Hello ${ user }, your token is ${token}`);
});

router.get('/create', (req, res) => {
    res.send('Create Movies');
});

router.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.clearCookie('token');

    if(!req.cookies.user && !req.cookies.token){
        res.send('Your cookies has been cleared');

    } else {
        res.send('Your cookies has NOT been cleared');
        
    }
});

router.post('/', (req, res) => {
    res.send('Store Movies');
});

router.get('/:id', (req, res) => {
    res.send('Show Movies');
});

router.delete('/:id', (req, res) => {
    res.send('Delete Movies');
});

module.exports = router;