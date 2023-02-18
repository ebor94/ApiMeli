const express = require("express");
const routes = express.Router();
const readFile = require("../controllers/saveData");
const getdata = require("../controllers/getdata");
/**
 * @swagger
 * tags:
 *   name: 
 * /savemeliData:
 *   get:
 *     summary: almacena la informacion extraida de las apis de mercado libre mediante la lectura de  un archivo
 *            
 *     responses:
 *       200:
 *         description: registros almacenados.
 *         content:
 *           application/json:
 *             schema:
 *              
 *       500:
 *         description: Some server error
 *
 */
routes.get("/savemeliData/", readFile);


/**
 * @swagger
 * tags:
 *   name: 
 *   description: 
 * /getdata:
 *   get:
 *     summary: Este End-Point  muestra la informacion de los vendedores,categorias,precio, de un producto de mercado libre
 *            
 *     responses:
 *       200:
 *         description: retorna array  de objetos con la informacion de los vendedores,categorias,precio, de un producto de mercado libre.
 *         content:
 *           application/json:
 *             schema:
 *              
 *       500:
 *         description: Some server error
 *
 */
routes.get("/getdata/", getdata);



module.exports = routes;