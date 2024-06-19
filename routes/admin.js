const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    } else {
        res.send("You're not an Admin");
    }
});

router.get('/', (req, res) => {
    res.cookie('token', '1234567890123');
    res.cookie('user', 'admin');
    res.send('Index Admin');
});

module.exports = router;