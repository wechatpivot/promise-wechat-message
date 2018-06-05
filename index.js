var xml2js = require('xml2js');


function WechatMessage() {

};


WechatMessage.prototype.xml2json = function(xml) {
  return new Promise(function (resolve, reject) {
    var options = {
      explicitArray: false,
      trim: true,
    };
    xml2js.parseString(xml, options, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.xml);
      }
    });
  });
};


module.exports = new WechatMessage();
