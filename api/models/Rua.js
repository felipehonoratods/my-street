const mongoose = require('mongoose');
const { Schema } = mongoose;

const rua = new Schema({
    area: {
        type: String
    },
    incident: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    msg: {
        type: String
    },
},{
    timestamps: true
});

mongoose.model('Rua', rua);