async function getListaFun() {
    const resposta = await fetch('https://projetofinallpr.onrender.com/funcionarios/listar');
    const funcionarios = await resposta.json();
    return funcionarios;
}

async function novo(obj) {
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch('https://projetofinallpr.onrender.com/funcionarios/cadastrar', opt);
    const casdastrando = await resposta.json();
    return casdastrando;
}

async function remove(id){
    const opt = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    };
    const resposta = await fetch('https://projetofinallpr.onrender.com/funcionarios/excluir', opt);
    const apagado = await resposta.json();
    return apagado;
   
}
async function edita(obj) {
    const opt ={
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const resultado = await fetch('https://projetofinallpr.onrender.com/funcionarios/editar', opt);
    const editado = await resultado.json();
    return editado;
}

async function buscaUm(id){
    const resposta = await fetch('https://projetofinallpr.onrender.com/funcionarios/listar/'+ id)
    const funcionario = await resposta.json();
    return funcionario;
}
export {getListaFun, novo, remove, edita, buscaUm};

