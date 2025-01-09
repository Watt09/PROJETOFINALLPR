async function getLista() {
    const resposta = await fetch('https://projetofinallpr.onrender.com/pedido/listar');
    const pedido = await resposta.json();
    return pedido;
}

async function novo(obj) { 
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch('https://projetofinallpr.onrender.com/pedido/cadastrar', opt);
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
    const resposta = await fetch('https://projetofinallpr.onrender.com/pedido/excluir', opt);
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
    const resultado = await fetch('https://projetofinallpr.onrender.com/pedido/editar', opt);
    const editado = await resultado.json();
    return editado;
}

async function buscaUm(id){
    const resposta = await fetch('https://projetofinallpr.onrender.com/pedido/listar/'+ id)
    const pedido = await resposta.json();
    return pedido;
}
export {getLista, novo, remove, edita, buscaUm};

