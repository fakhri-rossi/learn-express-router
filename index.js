const express = require('express');
const app = express();

// define port
const port = 3000;

// Define routes
app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));


// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});