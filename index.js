const express = require('express');
const app = express();

// define port
const port = 3000;

// define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Define routes
app.use('/theater', require('./routes/theater'));
app.use('/movies', require('./routes/movies'));
app.use('/admin', require('./routes/admin'));


// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});