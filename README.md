## Proyecto de Dieta con Abstract Factory en Node.js
Este proyecto implementa el **patrón de diseño Abstract Factory** para crear y gestionar diferentes tipos de dietas. Usamos dos tipos de dietas: Dieta vegetariana y Dieta keto. Este patrón permite la creación de productos relacionados.

## Estructura del Proyecto
│   index.js                  # Entrada del programa
│   package-lock.json         # Archivo de dependencias 
│   package.json              # Archivo de dependencias
│   README.md                 # Archivo README con la documentación
│
├───factories                 # Carpeta para las fabricas de dietas
│       FabricaDieta.js       # 
│       FabricaKeto.js        # Implementacion de la fabricas de la dieta Keto
│       FabricaVegetariana.js # Implementacion de la fabricas de la dieta Vegetariana
│
└───productos                 # Carpeta para los productos que componen las dietas
    |    PlatoKeto.js         # Implementacion para platos principales keto
    |    PlatoPrincipal.js    # Clase base para los platos principales
    |    PlatoVegetariano.js  # Implementacion para platos principales vegetarianos
    |    Postre.js            # Clase base para los postres
    |    PostreKeto.js        # Implementacion para postres keto
    └─── PostreVegetariano.js # Implementacion para postres vegetarianos

## Ejecute el programa 
Para correr el programa ectrba **node index.js** sobre la terminal donde esta abierto el programa
El programa solicitara que selccione el tipo de dieta de la desea un menu. 
    **1** Dieta Vegetarian
    **2** Dieta Keto
En caso de no seleccionar una opción valida el programa arrojara un mensaje de error en la consola

## Flujo de Ejecución "1"
************** Bienvenido al planificador de dietas. **************
Selecciona una opcion:
1. Dieta Vegetariana
2. Dieta Keto
Ingresa el número de la dieta que deseas: 1

Preparando menu para dieta vegetariana:
Preparando un plato principal keto: Pollo con aguacate. 🍽️
Preparando un postre keto: Cheesecake sin azúcar. 🥧

## Flujo de Ejecución "2"
************** Bienvenido al planificador de dietas. **************
Selecciona una opcion:
1. Dieta Vegetariana
2. Dieta Keto
Ingresa el número de la dieta que deseas: 2

Preparando menu para dieta keto:
Preparando un plato principal vegetariano: Ensalada de quinoa. 🥗
Preparando un postre vegetariano: Pudín de chía. 🍮

## Flujo de Ejecución "erroneo"
************** Bienvenido al planificador de dietas. **************
Selecciona una opcion:
1. Dieta Vegetariana
2. Dieta Keto
Ingresa el número de la dieta que deseas: 3
Opción inválida. Por favor, selecciona 1 o 2.
************** Bienvenido al planificador de dietas. **************
Selecciona una opcion:
1. Dieta Vegetariana
2. Dieta Keto
Ingresa el número de la dieta que deseas: 1

Preparando menu para dieta vegetariana:
Preparando un plato principal keto: Pollo con aguacate. 🍽️
Preparando un postre keto: Cheesecake sin azúcar. 🥧

## Clases principales y metodos
**Factories**
1. FabricaDieta.js (class FabricaDieta) --> Clase base para las fabricas de dietas.
2. FabricaKeto.js (class FabricaKeto extends FabricaDieta) --> Implementacion de la fábrica para crear productos de dieta Keto.
3. FabricaVegetariana.js (class FabricaVegetariana extends FabricaDieta) --> Implementacion de la fábrica para crear productos de dieta Vegetariana.
**Productos**
4. PlatoPrincipal.js (class PlatoPrincipal) --> Clase base para los platos principales.
5. PlatoKeto.js (class PlatoKeto extends PlatoPrincipal) --> Implementacion de platos principales Keto.
6. PlatoVegetariano.js (class PlatoVegetariano extends PlatoPrincipal) --> Implementacion de platos principales vegetarianos.
7. Postre.js (class Postre) --> Clase base para los postres.
8. PostreKeto.js (class PostreKeto extends Postre) --> Implementacion de postres Keto.
9. PostreVegetariano.js (class PostreVegetariano extends Postre) --> Implementacion de postres vegetarianos.

## Implentación de Abstract Factory
El patrón de siseño Abstract Factory es util cuando se requiere de crear familias de productos relacionados sin depender de clases concretas. En el ejemplos se trabaja con dietas para generar un menu, al perctencer a una misma linea por medio del uso de fabricas se pueden crear familas de productos.
En el caso condreto de este programa el patron Abstract Factory se utiliza en este progtram para crear familias de objetos relacionados,siendo en este caso los menus para dos diferentes tipos de dietas (Vegetariana y Keto), sin especificar sus clases concretas. Por medio de una interfa común en lac clase abstracta **FabricaDieta**  que es implemetada por las fabrica concreta (**FabricaVegetariana** **FabricaKeto**). De esta forma cada una de dichas fabricas crea su propio objeto (platos y postres) correspondientes a su dieta. 