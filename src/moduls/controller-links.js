const path = require('path');

export const rutaRelativa = (pathrel) => {
    const absolut = path.resolve(pathrel);
    return absolut;
};

