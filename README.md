#BackEnd Proyecto Notas
##Stack: NodeJs, ExpressJS, MongoDB, JWT

- Este es el backend del proyecto, creado con un pequeno stack, donde la base de datos contiene una coleccion de User y Notas las cuales esta relacionadas cada usuario tendra una array de la notas, la cual se crearan y se agregaran al user por id, en la cual podemos buscar las notas relacionadas al usuario y los usuarios con las notas, tenemos varios endpoint para los request tanto para crear usuarios(/api/register) y loguearse(/api/login) cada vez que el usuario se loguea recibira un token con el cual podra hacer los request a la rutas correspondientes sin el token el usuario no tiene permiso para la request que solicita, como crear las notas(POST:/api/notes), Actualizar las notas (PUT:/api/notes/:id), borrar las notas (DELETE:/api/note/:id), obtener una nota por id (GET:/api/note/:id), obtener los usuarios (GET:/api/users).



## Estructura del proyecto

- La carpeta root es {
  "backend": {
    "node_modules": {},
    "src": {
      "controllers": {
        "notes.controller.js": {},
        "user.controller.js": {}
      },
      "db": {
        "db.config.js": {}
      },
      "middleware": {
        "validateToken: {}
        "handleErrors.js": {},
        "routeNotFound.js": {}
      },
      "models": {
        "notes.model.js": {},
        "user.model.js": {}
      },
      "router": {
        "note.routes.js":{},
        "user.routes.js":{}
      },
      "app.js":{},
      "config.js":{},
      "index.js":{},
      "tests": {},
      "utils": {}
    }
  }
}

## Jest Config 

- En el package.json agregar { "jest" : { "testEnvironment": "node"} para utilizarlo en entorno NodeJs, tambien decarar los archivos test de la sigueinte manera: file.test.js jest automaticamnte leera estor archivo sin utilizar importacion del modulo


## Babel Config

- En package.json declaramos { "jest" : { "testEnvironment": "node",
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    } } } - testEnvironmen : permite a jest a ejecutar en entorno nodejs backend y transform pero mite a jest a utilizar import statement outside a module ejemplo ( import { function } from './file.js')

