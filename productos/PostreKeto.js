const Postre = require('./Postre');

class PostreKeto extends Postre {
    preparar() {
        console.log("Preparando un postre keto: Cheesecake sin azúcar. 🥧");
    }
}
module.exports = PostreKeto;