const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Visited');
    res.send('Index Theater');
});

router.get('/create', (req, res) => {
    res.send('Create Theater');
});

router.post('/', (req, res) => {
    res.send('Store Theater');
});

router.get('/:id', (req, res) => {
    res.send('Show Theater');
});

router.delete('/:id', (req, res) => {
    res.send('Delete Theater');
});

module.exports = router;