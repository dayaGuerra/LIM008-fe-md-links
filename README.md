# Markdown Links

> CLI y API




## Caracteristicas

- Muestra todos los archivos markdown (.md) colocando el comando `md-links` y seguido de la ruta `./some/example.md`
- Busca todos los links dentro del archivo .md
- Realiza peticiones HTTP para validar el link `--validate`
- Muestra el total de links encontrados y los links unicos hallados `--stats`
- Muestra el total de links rotos encontrados`--stats -- validate`

[Diagrama de flujo](https://bit.ly/2HFL1J0);

## Instalación

```
$ npm install dayaGuerra/LIM008-fe-md-links

```
## Usage

```
$ md-links <path-to-file> [options]
```

## API

```js
const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  if (typeof path !== 'string') {
    reject(new TypeError('Esperaba un valor string'));
  } if (options.validate) {
    validarUrl(path).then(response => resolve(response))
      .catch(error => reject(error));
  } else {
    resolve(linksDeRutas(path));
  }
});
```

### mdLinks(path, options)
#### Argumentos

- `path` - Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
- `options` - Un objeto con las siguientes propiedades:
    - `validate` - Booleano que determina si se desea validar los links encontrados.

#### Retorno

Retorna un `Object` con:

La función retorna una promesa (`Promise`) que resuelve un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `Text` - Texto que aparece dentro del link.
- `href` - Url encontrada.
- `file` - Ruta del archivo donde se encontro el link.


### CLI (Command Line Interface - Interfaz de Línea de Comando)

```js
#!/usr/bin/env node
const arg = process.argv.slice(2);

const cli = () => {
  if (arg.length === 3) {
    // respuesta stats + validate
    if (arg[1] === '--stats' && arg[2] === '--validate') {
      const links = linksDeRutas(arg[0]);
      validarUrl(arg[0]).then((response) => {
        console.log(` Total:  ${funcionStats(links).total}\n unique: ${funcionStats(links).unicos}\n Broken: ${statsRotos(response)}`);
      });
    }
  }
  // respuesta stats o validate
  if (arg.length === 2) {
    if (arg[1] === '--stats') {
      const links = linksDeRutas(arg[0]);
      console.log(` Total:  ${funcionStats(links).total}\n unique: ${funcionStats(links).unicos}`);
    }
    if (arg[1] === '--validate') {
      validarUrl(arg[0]).then(response => response
        .forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto} ${ele.status} ${ele.statusText}`)));
    }
  } else {
    linksDeRutas(arg[0]).forEach(ele => console.log(`${ele.ruta} ${ele.link} ${ele.texto}`));
  }
};

cli();
```

`_default <path-to-file> [options]`

El comportamiento por defecto no valida URLs

Ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

- `--validate`- hace una petición HTTP para
averiguar si el link funciona.

Ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

- `--stats` el output (salida) será un texto con estadísticas básicas sobre los links.

Ejemplo:

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

##### `--stats` y `--validate` 
- `--stats --validate` obtiene estadísticas con la validación de los links.

Ejemplo:

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```