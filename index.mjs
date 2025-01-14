import express from 'express';
import rotas_clientes from './rotas/rotas_clientes.mjs';
import rotas_produto from './rotas/rotas_produto.mjs';
import rotas_pedido from './rotas/rotas_pedido.mjs';
import rotas_categoria from './rotas/rotas_categoria.mjs';
import rotas_funcionario from './rotas/rotas_funcionario.mjs';
import rotas_lucrocusto from './rotas/rotas_lucrocustos.mjs';

import Categoria from './modelos/categoria.mjs';
import Cliente from './modelos/cliente.mjs';
import Funcionario from './modelos/funcionario.mjs';
import Lucrocusto from './modelos/lucrocusto.mjs';
import Produto from './modelos/produto.mjs';
import Pedido from './modelos/pedido.mjs';

const app = express();

app.use(express.json());
app.use('/clientes', rotas_clientes);
app.use('/produto', rotas_produto);
app.use('/categoria', rotas_categoria);
app.use('/pedido', rotas_pedido);
app.use('/funcionarios', rotas_funcionario);
app.use('/lucrocusto', rotas_lucrocusto);
app.use(express.static('./views/clientes'));
app.use(express.static('./views/categoria'));
app.use(express.static('./views/produto'));
app.use(express.static('./views/pedido'));
app.use(express.static('./views/funcionario'));
app.use(express.static('./views/lucrocusto'));
app.use(express.static('./views'));


const modelos = { Categoria, Cliente, Funcionario, Lucrocusto, Produto, Pedido };

async function autoPopulate() {
try {
    for (const [nomeModelo, modelo] of Object.entries(modelos)) {
        console.log(`Sincronizando tabela: ${nomeModelo}...`);
        await modelo.sync(); 
        
        const count = await modelo.count(); 
        if (count === 0) {
            console.log(`Inserindo dados iniciais na tabela: ${nomeModelo}...`);
            await modelo.bulkCreate(dadosIniciais[nomeModelo]);
            console.log(`Dados iniciais inseridos em: ${nomeModelo}`);
        } else {
            console.log(`Tabela ${nomeModelo} já possui dados.`);
        }
    }
} catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
}}

const dadosIniciais = {
    Funcionario: [
        { nome: 'João Silva', cargo: 'Gerente', salario: 4500 },
        { nome: 'Maria Oliveira', cargo: 'Vendedora', salario: 3000 },
        { nome: 'Carlos Pereira', cargo: 'Analista', salario: 4000 },
        { nome: 'Ana Souza', cargo: 'Atendente', salario: 2500 },
        { nome: 'Pedro Santos', cargo: 'Supervisor', salario: 4200 },
        { nome: 'Juliana Almeida', cargo: 'Assistente', salario: 2800 },
        { nome: 'Fernando Costa', cargo: 'Motorista', salario: 3200 },
        { nome: 'Paula Lima', cargo: 'Técnica', salario: 3500 },
        { nome: 'Bruno Rocha', cargo: 'Estagiário', salario: 1500 },
        { nome: 'Carla Mendes', cargo: 'Coordenadora', salario: 5000 },
    ],
    Lucrocusto: [
        { mes: 'Janeiro', lucro_bruto: 10000, fp: 2000, cmat: 1500, cman: 1000 },
        { mes: 'Fevereiro', lucro_bruto: 12000, fp: 2500, cmat: 1700, cman: 1300 },
        { mes: 'Março', lucro_bruto: 11000, fp: 2200, cmat: 1600, cman: 1200 },
        { mes: 'Abril', lucro_bruto: 11500, fp: 2300, cmat: 1650, cman: 1250 },
        { mes: 'Maio', lucro_bruto: 12500, fp: 2600, cmat: 1800, cman: 1400 },
        { mes: 'Junho', lucro_bruto: 13000, fp: 2700, cmat: 1850, cman: 1450 },
        { mes: 'Julho', lucro_bruto: 14000, fp: 3000, cmat: 2000, cman: 1500 },
        { mes: 'Agosto', lucro_bruto: 13500, fp: 2900, cmat: 1950, cman: 1450 },
        { mes: 'Setembro', lucro_bruto: 12500, fp: 2600, cmat: 1800, cman: 1400 },
        { mes: 'Outubro', lucro_bruto: 15000, fp: 3200, cmat: 2100, cman: 1600 },
        { mes: 'Novembro', lucro_bruto: 15500, fp: 3300, cmat: 2150, cman: 1650 },
        { mes: 'Dezembro', lucro_bruto: 16000, fp: 3400, cmat: 2200, cman: 1700 },
    ],
    Categoria: [
        { nome: 'Eletrônicos' },
        { nome: 'Roupas' },
        { nome: 'Alimentos' },
        { nome: 'Livros' },
        { nome: 'Móveis' },
    ],
    Produto: [
        { nome: 'Televisão', preco: 1200, categoriaId: 1 },
        { nome: 'Calça Jeans', preco: 150, categoriaId: 2 },
        { nome: 'Notebook', preco: 3000, categoriaId: 1 },
        { nome: 'Cadeira', preco: 350, categoriaId: 5 },
        { nome: 'Smartphone', preco: 2000, categoriaId: 1 },
    ],
    Pedido: [
        { clienteId: 1, produtoId: 1, quantidade: 2, total: 2400 },
        { clienteId: 2, produtoId: 3, quantidade: 1, total: 3000 },
        { clienteId: 3, produtoId: 2, quantidade: 3, total: 450 },
    ],
    Cliente: [
        { nome: 'Lucas Silva', email: 'lucas@exemplo.com' },
        { nome: 'Gabriela Costa', email: 'gabriela@exemplo.com' },
        { nome: 'Renato Almeida', email: 'renato@exemplo.com' },
    ],
};


autoPopulate();

app.listen(80, function () {
    console.log('Escutando.')
});
