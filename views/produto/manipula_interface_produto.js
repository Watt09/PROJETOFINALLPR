import { getLista, novo, remove, edita, buscaUm } from "./acessa_dados_produto.js";

//Funções
async function salvar() {
    const iptnome = document.getElementById('nome');
    const iptpreco = document.getElementById('preco');
    const iptquantidade = document.getElementById('quantidade');
    const iptcategoria_id = document.getElementById('categoria_id');


    const obj = {
        "nome": iptnome.value,
        "preco": iptpreco.value,
        "quantidade": iptquantidade.value,
        "categoria_id": iptcategoria_id.value,
  
    }
    await novo(obj);
    document.forms[0].reset();
    DesenhaTabela();
};

async function editar() {
    const iptid = document.getElementById('id');
    const iptnome = document.getElementById('nome');
    const iptpreco = document.getElementById('preco');
    const iptquantidade = document.getElementById('quantidade');
    const iptcategoria_id = document.getElementById('categoria_id');


    const obj = {

        "id": iptid.value,
        "nome": iptnome.value,
        "preco": iptpreco.value,
        "quantidade": iptquantidade.value,
        "categoria_id": iptcategoria_id.value,

    };

    await edita(obj);
    document.forms[0].reset();
    DesenhaTabela();
}

function ManipulaSalvar(event) {
    event.preventDefault();
    if (document.getElementById('id').value) {
        editar();
    } else {
        salvar();
    }
    document.getElementById('form_Produto').reset();
    document.getElementById('id').value = "";
}


async function ManipulaExcluir(event) {
    const id = event.target.getAttribute('data-id');
    await remove(id);
    DesenhaTabela();
}

async function ManipulaEditar(event) {
    const id = event.target.getAttribute('data-id');
    const produto = await buscaUm(id);
    document.getElementById('id').value = produto.id;
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('quantidade').value = produto.quantidade;
    document.getElementById('categoria_id').value = produto.categoria_id;

}

async function DesenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td6 = document.createElement('td');
        const btExc = document.createElement('button');
        const btEdi = document.createElement('button');

        btEdi.innerText = 'EDITAR';
        btEdi.setAttribute('data-id', dados[i].id);
        btEdi.addEventListener('click', ManipulaEditar);

        btExc.innerText = 'EXCLUIR';
        btExc.setAttribute('data-id', dados[i].id);
        btExc.addEventListener('click', ManipulaExcluir)


        td1.innerText = dados[i].nome;
        td2.innerText = dados[i].preco;
        td3.innerText = dados[i].quantidade;
        td4.innerText = dados[i].categoria_id;
        td6.append(btExc, btEdi);
        tr.append(td1, td2, td3, td4, td6, );
        tbody.append(tr);
    }
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);


window.addEventListener('load', DesenhaTabela);