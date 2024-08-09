const {Schema, model} = require('mongoose')

//mongoose: dependencias

const vehicleSchema = new Schema({
    plate:{
        type: String,
        unique: true,
        required: [true, 'The plate field is required'],
        maxlength: [6, 'Max 6 characters'],
        minlength: [5, 'Min 5 characters']
    },
    color:{
        type: String,
        required: [true, 'The color field is required'],
        minlength:[3, 'Min 3 characters']
    },
    model:{
        type: Number,
        required: [true, 'The model field is required'],          
    }
})

module.exports = model('Vehicle', vehicleSchema, 'vehicle')