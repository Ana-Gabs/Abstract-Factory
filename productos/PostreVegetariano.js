const Postre = require('./Postre');

class PostreVegetariano extends Postre {
    preparar() {
        console.log("Preparando un postre vegetariano: Pudín de chía. 🍮");
    }
}
module.exports = PostreVegetariano;