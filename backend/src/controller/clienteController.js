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

    app.get('/cliente',async (req, res) => {
        try {
            const cliente = await clienteModel.find()
            res.status(200).json(cliente)
        } catch (error) {
            res.status(500).json({error: "não foi possivel buscar clientes"});
        }
    })

    app.get('/cliente/:id', async (req, res) => {
        const id = req.params.id
        if(!clienteModel){
            return res.status(422).json({message: 'Cliente não encontrado'})
        }
        try {
            const cliente = await clienteModel.find({_id: id})
            res.status(200).json({cliente})
        } catch (error) {
            res.status(500).json({error})
        }
    })

    app.patch('/cliente/:id', async (req, res) => {
        const id = req.params.id
        const { nome, email, telefone, endereço, cpf } = req.body;
        const cliente =
        {
            nome,
            email,
            telefone,
            endereço,
            cpf
        }

        try {
            const atualizaCliente = await clienteModel.updateOne(
                {_id : id},
                cliente)

            if(!atualizaCliente){
                return res.status(422).json({message: 'Cliente não encontrado'});
            }

            res.status(200).json({msg: "cliente atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({error})
        }
    })
}

export default clienteController