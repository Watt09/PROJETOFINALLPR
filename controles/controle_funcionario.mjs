import Funcionario from "../modelos/funcionario.mjs";

async function novo(req, res) {
    const criado = await Funcionario.create({
        primeiro_nome: req.body.primeiro_nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        nascimento: req.body.nascimento,
        salario: req.body.salario,

    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Funcionario.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await Funcionario.findOne({
        where: {id: req.params.id}
    });

    res.json(um);
}

async function altera(req, res) {
    const cli = await Funcionario.findOne({
        where: { id: req.body.id }
    });

    cli.primeiro_nome = req.body.primeiro_nome,
        cli.sobrenome = req.body.sobrenome,
        cli.cpf = req.body.cpf,
        cli.email = req.body.email,
        cli.nascimento = req.body.nascimento,
        cli.salario=req.body.salario

    await cli.save();
    res.json(cli);
}


async function exclui(req, res) {
    const cli = await Funcionario.findOne({
        where: { id: req.body.id }
    });
    await cli.destroy();
    res.json(cli);
}

export { novo, todos, altera, exclui, um };