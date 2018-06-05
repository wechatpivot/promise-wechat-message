var xml2js = require('xml2js');


function WechatMessage() {

};


WechatMessage.prototype.xmlToJson = function(xml) {
  return new Promise(function (resolve) {
    xml2js.parseString(xml, { trim: true }, function (json) {
      resolve(json);
    });
  });
};


module.exports = new WechatMessage();
