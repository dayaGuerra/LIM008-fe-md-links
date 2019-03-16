"use strict";

var _mdlinks = _interopRequireDefault(require("./mdlinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const statsValidate = process.argv;
// const outPut = statsValidate.filter((ele, index) => {
//   if (index > 2) {
//     return ele === '--stats' || ele === '--validate';
//   }
// });
// console.log(outPut);
// console.log(mdLinks('C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba', 'validate'));
const [,, ...args] = process.argv;
const arg = process.argv.slice(2);

if (arg.length === 2) {
  (0, _mdlinks.default)(arg[0], arg[1]).then(response => console.log(response));
} // if (arg.length === 2) {
//   if (arg[1] === '--stats') {
//     console.log('deberiamostrar el total y links unicos');
//   }
//   if (arg[1] === '--validate') {
//     console.log('sadgasgdjasd');
//   }
// }