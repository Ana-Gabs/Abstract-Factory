const FabricaDieta = require('./FabricaDieta');
const PlatoKeto = require('../productos/PlatoKeto');
const PostreKeto = require('../productos/PostreKeto');

class FabricaKeto extends FabricaDieta {
    crearPlatoPrincipal() {
        return new PlatoKeto();
    }

    crearPostre() {
        return new PostreKeto();
    }
}
module.exports = FabricaKeto;