"use strict";
var stringProcessor = (function () {
    function stringProcessor(input) {
        input = this.data;
    }
    stringProcessor.prototype.getString = function () {
        return this.data;
    };
    stringProcessor.prototype.setString = function (data) {
        this.data = data;
    };
    stringProcessor.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 1; i < chars.length; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - 1];
            chars[chars.length - 1] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringProcessor;
}());
var s = new stringProcessor("hello");
//# sourceMappingURL=stringBuilder.js.map