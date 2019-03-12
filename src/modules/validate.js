"use strict";

var _mdlinks = require("../mdlinks");

const fetch = require('node-fetch');

const validarUrl = arraydeobjetos => {
  const arrlinks = (0, _mdlinks.unionDeFunciones)(arraydeobjetos);
  console.log(arrlinks);
  const evaluarLinks = arrlinks.map(propiedadDeObj => new Promise(resolve => {
    const propiedad = Object.assign(propiedadDeObj);
    fetch(propiedad.link).then(res => {
      if (propiedad.status >= 200 && propiedad.status < 399) {
        propiedad.status = res.status;
        propiedad.statusText = res.statusText;
        resolve(propiedad);
      } else {
        propiedad.status = res.status;
        propiedad.statusText = 'fail';
        resolve(propiedad);
      }
    }).catch(error => {
      propiedad.status = 'no existe';
      propiedad.statusText = 'fail';
      resolve(propiedad);
    });
  }));
  return Promise.all(evaluarLinks);
};

validarUrl('C:\\Users\\Laboratoria\\Documents\\Proyecto\\LIM008-fe-md-links\\test\\prueba').then(res => console.log(res)).catch(res => console.log(res));