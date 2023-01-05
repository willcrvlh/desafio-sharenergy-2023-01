import clienteModel from '../model/clienteModel.js';


const clienteController = app => {
    app.post('/cliente', async (req, res) => {
        const { nome, email, telefone, endereço, cpf } = req.body;

        if (!nome) {
            return res.status(422).json({ error: 'Campo nome é obrigatorio' })
        }
        const cliente =
        {
            nome,
            email,
            telefone,
            endereço,
            cpf
        }

    try {
        await clienteModel.create(cliente);
        res.status(201).json({msg: "cliente criado com sucesso"})
    } catch (error) {
        res.status(500).json({error: "não foi possivel criar um cliente"})
    }
    })

    app.get('/cliente', (req, res) => {
        
    })
}

export default clienteController