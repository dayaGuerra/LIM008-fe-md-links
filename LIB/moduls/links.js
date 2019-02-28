
const path = require('path');
const fs = require('fs');

// export const rutaRelativa = (pathrel) => {
//     const absolut = path.resolve(pathrel);
//     return absolut;
// };



 const arrayDeArchivos = (route) => {
    let newarray = [];
    if (fs.lstatSync(route).isFile() === true) {
        
     newarray.push(route);
    } else {
        let arrayPath = fs.readdirSync(route);
       
        arrayPath.forEach((element) => {
     
        const arrayderutasdearchivos = arrayDeArchivos(`${route}\\${element}`);
       
        newarray = newarray.concat(arrayderutasdearchivos);
     });
    }
    return newarray;
   }; 

   console.log(arrayDeArchivos('C:\\Users\\Laboratoria\\Documents\\prueba'));