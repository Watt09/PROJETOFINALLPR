import Lucrocusto from "../modelos/lucrocusto.mjs";

async function novo(req, res) {
    const criado = await Lucrocusto.create({
        lucro_bruto: req.body.lucro_bruto,
        fp: req.body.fp,
        cmat: req.body.cmat,
        cman: req.body.cman,
        lucro_liquido: req.body.lucro_liquido,

    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Lucrocusto.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await Lucrocusto.findOne({
        where: {id: req.params.id}
    });

    res.json(um);
}

async function altera(req, res) {
    const cli = await Lucrocusto.findOne({
        where: { id: req.body.id }
    });

    cli.lucro_bruto = req.body.lucro_bruto,
        cli.fp = req.body.fp,
        cli.cmat = req.body.cmat,
        cli.cman = req.body.cman,
        cli.lucro_liquido = req.body.lucro_liquido,

    await cli.save();
    res.json(cli);
}


async function exclui(req, res) {
    const cli = await Lucrocusto.findOne({
        where: { id: req.body.id }
    });
    await cli.destroy();
    res.json(cli);
}

export { novo, todos, altera, exclui, um };