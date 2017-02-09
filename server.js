const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

module.exports = app.listen(port, () => console.log('Server up on port: ' + port));
