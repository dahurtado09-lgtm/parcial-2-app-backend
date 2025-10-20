# 📋 Descripción General

Este proyecto es el backend del sistema de gestión de usuarios.
en el queremos ver comoo funciona la lógica del servidor, las rutas y la interacion que tiene con el frontend, permitiendo listar usuarios. 

El backend fue desarrollado con Node.js y utiliza el framework Express.js para gestionar las solicitudes HTTP (GET, POST, PUT, DELETE). mediante unos Cors. 

Se instalo y configuro cors para permitir que el frontend se comunique sin restricciones con el backend.
lo puedes hacer instalando el paquete de la siguiente manera.

-- 1 	En la terminal pondremos npm install cors, luego en nuestro index.js pondremos esta línea de código: 
    const cors = require("cors");
    app.use(cors());

-- 2 Creación del .env: Se crea la carpeta de .env  en ella se crea la variable de entorno PORT= 3000, El .env es como una mochila de configuraciones privadas que tu aplicación lleva consigo para saber cómo funcionar, pero sin mostrar esas cosas al público
    Instalar dotenv:  poner en la terminal  npm install dotenv lo cual Permite a express leer las variables guardadas en .env
    Luego en el index.js debemos agregar la siguiente línea 
    require("dotenv").config(); la cual activa la lectura del archivo .env

### 📋Dependencias utilizadas

1- npm init -y → Inicializa el proyecto y crea el archivo package.json.

2- npm install express → Instala el framework Express para manejar las rutas y el servidor.

3- npm install nodemon --save-dev → Permite reiniciar automáticamente el servidor en desarrollo.

4- npm install dotenv → Permite manejar variables de entorno desde el archivo .env.

5- npm install cors → Permite la comunicación entre el frontend y el backend.

-- Nota: Gran parte del desarrolo y apoyo lo usamos mediante videos de Youtube del canal JePaFe Net 
URL para su revision https://www.youtube.com/watch?v=hOORng7xOpQ 

-- Nota 2: Se uso la misma pagina que uso el Canal de Youtube para rellenar datos, en este caso usamos la pagina de FakeStore --> https://fakestoreapi.com/