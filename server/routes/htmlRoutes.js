//allows html to be served up by the server 
const path = require('path');

module.exports = function(app) {
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
};