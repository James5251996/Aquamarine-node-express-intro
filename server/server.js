const express = require('express');

// create an instance of express by calling the function. 
const app = express();

// need the port number as a way to uniquely call something
const port = 8000;

// espress static makes our folder available
app.use(express.static('server/public'));

// starts our server
app.listen(port, () => {
    console.log('listening on port:', port)
});