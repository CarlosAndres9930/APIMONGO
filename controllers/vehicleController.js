const Vehicle = require('../models/vehicle')

//Get all documents from vechicle
const getVehicle = async(req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)

}
//POST/CREATE a document in the collection Vechicle

const postVehicle = async(req, res) => {
    const body = req.body // Get the body send frm postman or a form
    let msg = 'Vehicle inserted successfully'
    try {
        const vehicle = new Vehicle(body) //Aqui SOLAMENTE esta en la RAM no en la BD.
        //Creo un nuevo objeto de la clase vehiculo y le envio los parametros desde postman or un form
        await vehicle.save() //Insert object a the collection
    } catch (error){
        msg = error
    }
    res.json({msg:msg})
}


//Exports functions
module.exports = {
    getVehicle,
    postVehicle
}