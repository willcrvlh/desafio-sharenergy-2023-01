
const clienteController = app =>{
    app.post('/cliente', (req, res)=>{
        res.send("rota post")
    })

    app.get('/cliente', (req, res)=>{
        res.send("rota get")
    })
}

export default clienteController