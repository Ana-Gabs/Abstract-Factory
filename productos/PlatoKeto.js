const PlatoPrincipal = require('./PlatoPrincipal');

class PlatoKeto extends PlatoPrincipal {
    preparar() {
        console.log("Preparando un plato principal keto: Pollo con aguacate. 🍽️");
    }
}
module.exports = PlatoKeto;