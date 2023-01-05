import mongoose from "mongoose";

const clienteModel = mongoose.model('cliente' , {
    nome: String, 
    email: String, 
    telefone: Number, 
    endereço: String,  
    cpf: Number
})

export default clienteModel;