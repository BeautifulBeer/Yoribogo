module.exports.function = function showGuideLine (){
  var db = require('lib/database.js');
  return db.guides;
}
