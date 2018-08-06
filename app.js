const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then((archivo) => {
            console.log(`archivo creado:`, colors.green(archivo));
        }).catch((err) => {
            console.log('error: '+err);
        });
        break; 

    default:
        console.log('comando no reconocido');
        break;
}


