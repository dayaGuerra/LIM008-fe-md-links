#!/usr/bin/env node
"use strict";

var _cli = _interopRequireDefault(require("./modules/cli"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arg = process.argv.slice(2);
(0, _cli.default)(arg).then(function (msg) {
  return console.log(msg);
});