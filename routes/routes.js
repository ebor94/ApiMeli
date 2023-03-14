const express = require("express");
const routes = express.Router();
const readFile = require("../controllers/saveData");
const getdata = require("../controllers/getdata");
const saveMeliDataP =  require("../controllers/saveMeliDataPost")
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


  /**
 * @swagger
 * tags:
 *   name: 
 *   description: almacena la informacion extraida de las apis de mercado libre mediante la lectura de  un archivo
 * /saveMeliDataP:
 *   post:
 *     summary: A sample survey.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: name
 *         value : 'technical_challenge_data'
 *         type: string
 *         description: name file.
 *       - in: body
 *         name: delimiter
 *         value: ','
 *         type: string
 *         description: delimiter file.
 *       - in: body
 *         name: extension
 *         value: 'csv'
 *         type: string
 *         description: extension file.
 *     responses:
 *       200:
 *         description: OK
 *
 */
routes.post('/saveMeliDataP/', async  (req,res) => {
       const response =   await saveMeliDataP(req);   
       
       res.json(response); 
  });



module.exports = routes;