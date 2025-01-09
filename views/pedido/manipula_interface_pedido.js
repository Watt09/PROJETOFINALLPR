import { getLista, novo, remove, edita, buscaUm } from "./acessa_dados_pedido.js";

//Funções

async function salvar() {
    const iptCliente = document.getElementById('id_cliente');
    const iptProduto = document.getElementById('id_produto');
    const iptValor = document.getElementById('valor');
    const iptData = document.getElementById('data');


    const obj = {
        "id_cliente": iptCliente.value,
        "id_produto": iptProduto.value,
        "valor": iptValor.value,
        "data": iptData.value
  
    }
    await novo(obj);
    document.forms[0].reset();
    DesenhaTabela();
};

async function editar() {
    const iptid = document.getElementById('id');
    const iptCliente = document.getElementById('id_cliente');
    const iptProduto = document.getElementById('id_produto');
    const iptValor = document.getElementById('valor');
    const iptData = document.getElementById('data');


    const obj = {
        "id": iptid.value,
        "id_cliente": iptCliente.value,
        "id_produto": iptProduto.value,
        "valor": iptValor.value,
        "data": iptData.value,

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
    document.getElementById('form_Pedido').reset();
    document.getElementById('id').value = "";
}


async function ManipulaExcluir(event) {
    const id = event.target.getAttribute('data-id');
    await remove(id);
    DesenhaTabela();
}

async function ManipulaEditar(event) {
    const id = event.target.getAttribute('data-id');
    const cliente = await buscaUm(id);
    document.getElementById('id').value = cliente.id;
    document.getElementById('id_cliente').value = cliente.id_cliente;
    document.getElementById('id_produto').value = cliente.id_produto;
    document.getElementById('valor').value = cliente.valor;
    document.getElementById('data').value = cliente.data;

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

        btEdi.innerText = 'Editar';
        btEdi.setAttribute('data-id', dados[i].id);
        btEdi.addEventListener('click', ManipulaEditar);

        btExc.innerText = 'Excluir';
        btExc.setAttribute('data-id', dados[i].id);
        btExc.addEventListener('click', ManipulaExcluir)

        td1.innerText = dados[i].id_cliente;
        td2.innerText = dados[i].id_produto;
        td3.innerText = dados[i].valor;
        td4.innerText = dados[i].data;
        td6.append(btExc, btEdi);
        tr.append(td1, td2, td3, td4, td6);
        tbody.append(tr);
    }
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);


window.addEventListener('load', DesenhaTabela);