
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const traineeSchema = new Schema({
    Name:String,
    Address:String,
    Gender:String,
    Phone:String,
    Certificates:String


});

const Trainee = mongoose.model('trainee',traineeSchema);

module.exports = Trainee;