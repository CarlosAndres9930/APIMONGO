const express = require('express')
require('dotenv').config()
const dbConnection = require('../database/config')
const {getVehicle, postVehicle} = require('../controllers/vehicleController')
class Server{
    constructor(){
        //Metodo con parentesis y si es un atributo va sin parentesis
        this.app = express()
        //this.port=3000
        this.listen() 
        this.dbConnection()
        this.pathVehicle = '/api/Vehicle' //Ruta publica de la api
        this.route()
        
    }
    async dbConnection(){
        await dbConnection()
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathVehicle, getVehicle) //Ruta para obtener todos los vehículos
        this.app.post(this.pathVehicle, postVehicle)
    }
    listen(){
        this.app.listen(process.env.PORT, () =>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
}









module.exports = Server //Import class server