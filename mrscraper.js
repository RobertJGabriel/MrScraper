var request = require("request");
var sanitizeHtml = require('sanitize-html');

module.exports = function (urls, callback) {

    request({
        uri: urls,
    }, function (error, response, body) {
        var removeJavascript = sanitizeHtml(body);
        var test = removeJavascript.replace(/<(?:.|\n)*?>/gm, '');
        var removespacing = test.replace(/\s\s+/g, ' ');
        callback(removespacing.split(" "));
    });

}