import validarUrl from "./modules/validate";

const mdLinks = (path, options = { validate: false }) => {
 if (!options)  {
    throw new Error("")
 }
  if (options.validate) { // undefined.validate

  } else if (!options.validate) {

  }
};
// usar throw

mdLinks('asd', null);
export default mdLinks;
