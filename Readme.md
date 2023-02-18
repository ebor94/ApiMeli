#💻 Proyecto Api Desafío Técnico Mercado Libre😎

##### Introduccion
> El desafío técnico consiste en armar un servicio web que exponga un endpoint para
leer un archivo, consultar una serie de APIs públicas de MercadoLibre y cargar una
base de datos con los datos del archivo y las consultas a las APIs.


##### Stack Utilizado👨🏼‍💻 
Backend : NodeJs
Base De Datos : MongoDB
Modulos implementados
- Express
- Nodemon
- Mongoose
- Swagger
- Axios
- cors
- Jest
-Dotenv

##### Arquitectura Del Proyecto
- Config
- 	-apis.js
- 	file.js
- Controllers
- 	SaveData.js
- 	GetDta.js
- DB
- 	Db.js
- 	Meli.js
- Docs
- 	Swagger.js
- Routes
- 	routes.js
- Service
- 	service.js
- app.js

##### Variables de entorno a configurar
- HOST_DATABASE
- NAME_DATABASE
- USER_DATABASE
- PASSWORD_DATABAS
- PORT
- PORTDOCKER


##### Instalacion

1.    Servicio de Mongo instalado y ejecutando 
2.  Docker instalado y ejecutando
3.  ejecutar el comando **npm instal**l dentro de la carpeta del proyecto en una terminal
4. Ejecuta el comando **nodemon app.js** para iniciar el servidor 
5. una vez el servidor este en ejecucion abrir
6. el **host:port/api/docs/melidocs**, alli encontrará la documentacion de los end-point :tw-1f60e:
