const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log(argv);

// console.log("Base:Yargs", argv.base);

// const [,,arg3='base=5'] = process.argv;
// const [,base=5]= arg3.split('=')

// const base= 7;

crearArchivo(argv.base, argv.l, argv.h)
.then( nombrearchivo => console.log(nombrearchivo.rainbow, 'creado'))
.catch( err => console.log(err))