const mongoose = require('mongoose');

const UserSchema = {

    documento: String,
    senha: String,
    nome: String,
    email: String,
    telefone: Number,
    codigo: Number,
    criado: {
        type: Date,
        default: Date.now()
    }
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel