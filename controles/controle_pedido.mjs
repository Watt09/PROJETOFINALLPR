import Pedido from "../modelos/pedido.mjs";

async function novo(req, res) {
    const criado = await Pedido.create({
        id_cliente: req.body.id_cliente,
        id_produto: req.body.id_produto,
        valor: req.body.valor,
        data: req.body.data,
       
    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Pedido.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await Pedido.findOne({
        where: {id: req.params.id}
    });
 
    res.json(um);
}

async function altera(req, res) {
    const cli = await Pedido.findOne({
        where: { id: req.body.id }
    });

    cli.id_cliente = req.body.id_cliente,
        cli.id_produto = req.body.id_produto,
        cli.valor = req.body.valor,
        cli.data = req.body.data,
       
    await cli.save();
    res.json(cli);
}


async function exclui(req, res) {
    const cli = await Pedido.findOne({
        where: { id: req.body.id }
    });
    await cli.destroy();
    res.json(cli);
}

export { novo, todos, altera, exclui, um };