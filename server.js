const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const environment = process.env.NODE_ENV || "dev";

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, error => {
  if (error) {
    console.error(error);
  }
  else {
    console.info(`==> Current environment is ${environment}.`);
    console.info(`==> Visit http://localhost:${PORT}/ in your browser.`);
  }
});
