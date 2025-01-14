import { getLista, novo, remove, edita, buscaUm } from "./acessa_dados_lucrocusto.js";

//Funções
async function salvar() {
    const iptmes = document.getElementById('mes');
    const iptlucro_bruto = document.getElementById('lucro_bruto');
    const iptfp = document.getElementById('fp');
    const iptcmat = document.getElementById('cmat');
    const iptcman = document.getElementById('cman');
    const iptlucro_liquido = iptlucro_bruto - (iptfp + iptcmat + iptcman);


    const obj = {
        "mes": iptmes.value,
        "lucro_bruto": iptlucro_bruto.value,
        "fp": iptfp.value,  
        "cmat": iptcmat.value,
        "cman": iptcman.value,
        "lucro_liquido": iptlucro_liquido.value
  
    }
    await novo(obj);
    document.forms[0].reset();
    DesenhaTabela();
};

async function editar() {
    const iptid = document.getElementById('id');
    const iptmes = document.getElementById('mes');
    const iptlucro_bruto = document.getElementById('lucro_bruto');
    const iptfp = document.getElementById('fp');
    const iptcmat = document.getElementById('cmat');
    const iptcman = document.getElementById('cman');
    const iptlucro_liquido = iptlucro_bruto - (iptfp + iptcmat + iptcman);


    const obj = {
        "id": iptid.value,
        "mes": iptmes.value,
        "lucro_bruto": iptlucro_bruto.value,
        "fp": iptfp.value,
        "cmat": iptcmat.value,
        "cman": iptcman.value,
        "lucro_liquido": iptlucro_liquido.value,

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
    document.getElementById('form_Lucrocusto').reset();
    document.getElementById('id').value = "";
}


async function ManipulaExcluir(event) {
    const id = event.target.getAttribute('data-id');
    await remove(id);
    DesenhaTabela();
}

async function ManipulaEditar(event) {
    const id = event.target.getAttribute('data-id');
    const lucrocusto = await buscaUm(id);
    document.getElementById('id').value = lucrocusto.id;
    document.getElementById('mes').value = lucrocusto.mes;
    document.getElementById('lucro_bruto').value = lucrocusto.lucro_bruto;
    document.getElementById('fp').value = lucrocusto.fp;
    document.getElementById('cmat').value = lucrocusto.cmat;
    document.getElementById('cman').value = lucrocusto.cman;

}

async function DesenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();

    dados.sort((a, b) => {
        
        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        return meses.indexOf(a.mes) - meses.indexOf(b.mes);
    });

    let totalLucroBruto = 0;
    let totalFP = 0;
    let totalCMAT = 0;
    let totalCMAN = 0;
    let totalLucroLiquido = 0;

    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        const btExc = document.createElement('button');
        const btEdi = document.createElement('button');

        btEdi.innerText = 'Editar';
        btEdi.setAttribute('data-id', dados[i].id);
        btEdi.addEventListener('click', ManipulaEditar);

        btExc.innerText = 'Excluir';
        btExc.setAttribute('data-id', dados[i].id);
        btExc.addEventListener('click', ManipulaExcluir)


        td7.innerText = dados[i].mes;
        td1.innerText = dados[i].lucro_bruto;
        td2.innerText = dados[i].fp;
        td3.innerText = dados[i].cmat;
        td4.innerText = dados[i].cman;
        td5.innerText = dados[i].lucro_liquido;
        td6.append(btExc, btEdi);

        td8.innerText =totalLucroBruto
        td9.innerText =totalFP
        td10.innerText =totalCMAT
        td11.innerText =totalCMAN
        td12.innerText =totalLucroLiquido
        td13.innerText ="Total anual"
        td14.innerText =
        td14.innerText =

        tr.append(td7, td1, td2, td3, td4, td5, td6);
        tr.append(td8, td9, td10, td11, td12, td13, td14);
        tbody.append(tr);

        totalLucroBruto += dados[i].lucro_bruto;
        totalFP += dados[i].fp;
        totalCMAT += dados[i].cmat;
        totalCMAN += dados[i].cman;
        totalLucroLiquido += dados[i].lucro_liquido;
    }
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);


window.addEventListener('load', DesenhaTabela);
