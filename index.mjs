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
app.use('/funcionario', rotas_funcionario);
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
        await modelo.sync(); // Garante que a tabela existe
        
        const count = await modelo.count(); // Conta registros existentes
        if (count = 0) {
            console.log(`Inserindo dados iniciais na tabela: ${nomeModelo}...`);
            await modelo.bulkCreate(dadosIniciais[nomeModelo]); // Insere os dados iniciais
            console.log(`Dados iniciais inseridos em: ${nomeModelo}`);
        } else {
            console.log(`Tabela ${nomeModelo} já possui dados.`);
        }
    }
} catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
}
    try {
    await sequelize.transaction(async (t) => {
        await Lucrocusto.bulkCreate(dadosIniciais.Lucrocusto, { transaction: t, validate: true });
    });
    console.log('Dados inseridos na tabela Lucrocusto com sucesso.');
} catch (error) {
    console.error('Erro ao inserir dados na tabela Lucrocusto:', error);
}
}

const dadosIniciais = {
    Categoria: [
        { nome: 'Eletrônicos', descricao: 'Dispositivos eletrônicos e acessórios' },
        { nome: 'Roupas', descricao: 'Vestuário masculino e feminino' },
        { nome: 'Alimentos', descricao: 'Produtos alimentícios' },
    ],
    Cliente: [
        { primeiro_nome: 'João', sobrenome: 'Silva', cpf: '12345678901', email: 'joao@gmail.com', nascimento: '1990-01-15' },
        { primeiro_nome: 'Maria', sobrenome: 'Souza', cpf: '98765432109', email: 'maria@gmail.com', nascimento: '1985-07-22' },
        { primeiro_nome: 'Carlos', sobrenome: 'Oliveira', cpf: '45678912300', email: 'carlos@gmail.com', nascimento: '1978-03-10' },
    ],
    Funcionario: [
        { primeiro_nome: 'Ana', sobrenome: 'Pereira', cpf: '32165498700', email: 'ana@gmail.com', nascimento: '1995-05-30', salario: 3000.00 },
        { primeiro_nome: 'Pedro', sobrenome: 'Costa', cpf: '65478932100', email: 'pedro@gmail.com', nascimento: '1988-11-12', salario: 3500.00 },
    ],
    Lucrocusto: [
        { mes: 'Janeiro', lucro_bruto: 10000.00, fp: 2000.00, cmat: 3000.00, cman: 1500.00 },
        { mes: 'Fevereiro', lucro_bruto: 15000.00, fp: 2500.00, cmat: 4000.00, cman: 2000.00 },
        { mes: 'Março', lucro_bruto: 20000.00, fp: 3000.00, cmat: 5000.00, cman: 2500.00 },
        { mes: 'Abril', lucro_bruto: 25000.00, fp: 3500.00, cmat: 6000.00, cman: 3000.00 },
        { mes: 'Maio', lucro_bruto: 30000.00, fp: 4000.00, cmat: 7000.00, cman: 3500.00 },
        { mes: 'Junho', lucro_bruto: 35000.00, fp: 4500.00, cmat: 8000.00, cman: 4000.00 },
        { mes: 'Julho', lucro_bruto: 40000.00, fp: 5000.00, cmat: 9000.00, cman: 4500.00 },
        { mes: 'Agosto', lucro_bruto: 45000.00, fp: 5500.00, cmat: 10000.00, cman: 5000.00 },
        { mes: 'Setembro', lucro_bruto: 50000.00, fp: 6000.00, cmat: 11000.00, cman: 5500.00 },
        { mes: 'Outubro', lucro_bruto: 55000.00, fp: 6500.00, cmat: 12000.00, cman: 6000.00 },
        { mes: 'Novembro', lucro_bruto: 60000.00, fp: 7000.00, cmat: 13000.00, cman: 6500.00 },
        { mes: 'Dezembro', lucro_bruto: 65000.00, fp: 7500.00, cmat: 14000.00, cman: 7000.00 },
    ],
    Produto: [
        { nome: 'Notebook', preco: 3500.00, quantidade: 10, categoria_id: 1 },
        { nome: 'Camiseta', preco: 50.00, quantidade: 100, categoria_id: 2 },
        { nome: 'Arroz 5kg', preco: 25.00, quantidade: 50, categoria_id: 3 },
    ],
    Pedido: [
        { id_cliente: 1, id_produto: 1, valor: 3500.00, data: '2025-01-12' },
        { id_cliente: 2, id_produto: 2, valor: 100.00, data: '2025-01-12' },
        { id_cliente: 3, id_produto: 3, valor: 75.00, data: '2025-01-12' },
    ],
};

autoPopulate();

app.listen(80, function () {
    console.log('Escutando.')
});
