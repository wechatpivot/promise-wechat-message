module.exports = function (from, to, content) {
  return `
    <ToUserName><![CDATA[${to}]]></ToUserName>
    <FromUserName><![CDATA[${from}]]></FromUserName>
    <CreateTime>${Math.floor(Date.now() / 1000)}</CreateTime>
    <MsgType><![CDATA[text]]></MsgType>
    <Content><![CDATA[${content}]]></Content>
  `;
};
