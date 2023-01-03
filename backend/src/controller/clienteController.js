
const clienteController = app =>{
    app.post('/cliente', (req, res)=>{
        res.send("rota post")
    })
}

export default clienteController