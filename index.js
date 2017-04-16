let express     = require('express');
let app         = express();
let path        = require('path');

//import Routes
require('./api/routes')(app);

//load initial index.html file
app.use('/', express.static(path.join(__dirname + '/static')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});