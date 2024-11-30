const readline = require('readline');
const FabricaVegetariana = require('./factories/FabricaVegetariana');
const FabricaKeto = require('./factories/FabricaKeto');

function prepararDieta(tipoDieta) {
    let fabrica;

    if (tipoDieta === 'vegetariana') {
        fabrica = new FabricaVegetariana();
    } else if (tipoDieta === 'keto') {
        fabrica = new FabricaKeto();
    } else {
        throw new Error("Tipo de dieta no soportado.");
    }

    const platoPrincipal = fabrica.crearPlatoPrincipal();
    const postre = fabrica.crearPostre();

    console.log(`\nPreparando menú para dieta ${tipoDieta}:`);
    platoPrincipal.preparar();
    postre.preparar();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function solicitarOpcion() {
    console.log("************** Bienvenido al planificador de dietas. **************");
    console.log("Selecciona una opcion:");
    console.log("1. Dieta Vegetariana");
    console.log("2. Dieta Keto");

    rl.question("Ingresa el número de la dieta que deseas: ", (respuesta) => {
        if (respuesta === '1') {
            prepararDieta('vegetariana');
        } else if (respuesta === '2') {
            prepararDieta('keto');
        } else {
            console.log("Opción inválida. Por favor, selecciona 1 o 2.");
            solicitarOpcion();
            return;  
        }
        rl.close();
    });
}
solicitarOpcion();