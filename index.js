var crypto = require('crypto');
var xml2js = require('xml2js');


function WechatMessage() {

};


WechatMessage.prototype.receive = function(xml) {
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


WechatMessage.prototype.verify = function (signature, timestamp, nonce, token) {
  var shasum = crypto.createHash('sha1');
  var arr = [token, timestamp, nonce].sort();
  shasum.update(arr.join(''));
  return shasum.digest('hex') === signature;
};


module.exports = new WechatMessage();
