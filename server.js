const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app.listen(port, () => console.log('Server up on port: ' + port));
