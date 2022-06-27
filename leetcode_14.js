"use strict";
exports.__esModule = true;
exports.longestCommonPrefix = void 0;
var a = [
    ["flower", "flow", "flight"],
    ["Found", "Figure", "Figurine"],
    ["Apple", "App", "Apply"],
    ["asdfasdf", "asdfasdf", "asdfasdf", "asdfasdf", "asdfasdf"],
];
function longestCommonPrefix(strs) {
    var returnString = "";
    var j = 0; // goign through the position in the string
    while (strs[0][j] != null) {
        // going through each string
        for (var i = 0; i < strs.length; i++) {
            if (strs[0][j] !== strs[i][j]) {
                return returnString;
            }
            // console.log(i, j, strs[i][j]);
        }
        returnString += strs[0][j];
        // console.log(returnString);
        j++;
        // console.log("exists:", strs[0][j] != null);
    }
    return returnString;
}
exports.longestCommonPrefix = longestCommonPrefix;
a.forEach(function (x, i) {
    console.log(x);
    console.log(longestCommonPrefix(x));
    console.log("__________");
});
