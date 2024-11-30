const PlatoPrincipal = require('./PlatoPrincipal');

class PlatoVegetariano extends PlatoPrincipal {
    preparar() {
        console.log("Preparando un plato principal vegetariano: Ensalada de quinoa. 🥗");
    }
}
module.exports = PlatoVegetariano;






