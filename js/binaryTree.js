"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Node_1 = require("./Node");
var a = new Node_1.Node('A');
var b = new Node_1.Node('B');
var c = new Node_1.Node('C');
var d = new Node_1.Node('D');
var e = new Node_1.Node('E');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
// traverse tree and return array with values
var traverse_tree = function (node) {
    if (node === null)
        return [];
    return __spreadArray(__spreadArray([
        node.val
    ], traverse_tree(node.left), true), traverse_tree(node.right), true);
};
console.log(traverse_tree(a));
