const FabricaDieta = require('./FabricaDieta');
const PlatoVegetariano = require('../productos/PlatoVegetariano');
const PostreVegetariano = require('../productos/PostreVegetariano');

class FabricaVegetariana extends FabricaDieta {
    crearPlatoPrincipal() {
        return new PlatoVegetariano();
    }

    crearPostre() {
        return new PostreVegetariano();
    }
}
module.exports = FabricaVegetariana;


