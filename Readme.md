#💻 Proyecto Api Desafío Técnico Mercado Libre😎

##### Introduccion
> El desafío técnico consiste en armar un servicio web que exponga un endpoint para
leer un archivo, consultar una serie de APIs públicas de MercadoLibre y cargar una
base de datos con los datos del archivo y las consultas a las APIs.

##### Stack Utilizado👨🏼‍💻

- Backend : NodeJs
- Base De Datos : MongoDB
- Modulos implementados:

- Express
- Nodemon
- Mongoose
- Swagger
- Axios
- cors
- Jest
- Dotenv

#### Estructura Del Proyecto

- Config
- -apis.js
- -file.js
- Controllers
- -SaveData.js
- -GetDta.js
- DB
- -Db.js
- -Meli.js
- Docs
- -Swagger.js
- Routes
- -routes.js
- Service
- -service.js
- app.js

#### Variables de entorno a configurar

>Para configurar las Variables de entorno  de debe crear unarchivo .env con las siguientes variables

- HOST_DATABASE=mongo
- NAME_DATABASE=meli
- USER_DATABASE
- PASSWORD_DATABASE
- DELIMITER =  ,
- EXTENSION =  csv
- NAME_DOCUMENT =  technical_challenge_data
- PORT=3000.

##### Instalacion Sin contenedor

1. Servicio de Mongo instalado y ejecutando ver configuracion del servicio [aqui](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/on-windows/ "aqui")
2. para ejecutar el proyecto sin contenedor, ejecutar el comando **npm instal**l dentro de la carpeta del proyecto en una terminal
3. Ejecuta el comando **nodemon app.js** para iniciar el servidor
4. una vez el servidor este en ejecucion abrir
5. el **host:3000/api/docs/melidocs**, alli encontrará la documentacion de los end-point

##### Instalacion con contenedor

1. Modificar la variable de entorno HOST_DATABASE=mongo en el archivo .env
2. En la terminalnos ubicamos en la raiz del proyecto y ejecutamos el siguiente comando docker-compose up
3. Abrimos el navegador **http://localhost:5000/api/docs/melidocs** , alli encontrará la documentacion de los en_points.
