import Produto from "../modelos/produto.mjs";
import Pedido from "../modelos/pedido.mjs"
import categoria_id from "../modelos/categoria.mjs"

async function novo(req, res) {
    const criado = await Produto.create({

        nome: req.body.nome,
        preco: req.body.preco,                      
        quantidade: req.body.quantidade,
        categoria_id: req.body.categoria_id,
    });
    res.json(criado);
}



async function todos(req, res) {

    const todos = await Produto.findAll();

    res.json(todos); 

}

async function um(req, res) {

    const um = await Produto.findOne({

        where: { id: req.params.id }

    });

    res.json(um);
}

async function altera(req, res) {

    const cli = await Produto.findOne({ 
        where: { id: req.body.id } 
    });

    cli.nome = req.body.nome,
    cli.preco = req.body.preco,            
    cli.quantidade = req.body.quantidade,
    cli.categoria_id = req.body.categoria_id,

    await cli.save();
    res.json(cli);
}



async function exclui(req, res) {
    const exclui = await Produto.findOne({ where: { id: req.body.id } });

    await exclui.destroy();
    res.json(exclui);

}

export { novo, todos, altera, exclui, um };
