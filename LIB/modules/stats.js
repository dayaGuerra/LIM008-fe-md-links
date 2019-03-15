// Total de links y links unicos
export const funcionStats = (data, propiedad) => {
  const newArr = data.map(obj => obj[propiedad]);
  const obj = {
    total: newArr.length,
    unicos: [...new Set(newArr)].length,
  };
  return obj;
};

// Total de Links rotos
export const statsRotos = (data) => {
  const linksRotos = data.filter(ele => ele.statusText === 'fail');
  return linksRotos.length;
};
