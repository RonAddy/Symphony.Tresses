const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

//Setup middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`🤖 Listening on port ${PORT}`);
});


// handles error messages to paths that are not detailed here
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not Found!'
  });
});

// handles error messages that deal with server calls not being recognized
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message
  });
});