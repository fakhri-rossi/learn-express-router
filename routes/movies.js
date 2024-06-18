const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Visited');
    res.send('Index Movies');
});

router.get('/create', (req, res) => {
    res.send('Create Movies');
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