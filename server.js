const fs = require('fs');
const path = require('path');
const express = require ('express');

const app = express();
const PORT = process.env.PORT || 3001;

require('./routes/apiRoutes');
require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  