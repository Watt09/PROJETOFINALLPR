import { Sequelize } from "sequelize";
import Categoria from './modelos/categoria.mjs';
import Cliente from './modelos/cliente.mjs';
import Funcionario from './modelos/funcionario.mjs';
import Lucrocusto from './modelos/lucrocusto.mjs';
import Produto from './modelos/produto.mjs';
import Pedido from './modelos/pedido.mjs';

const conexao = new Sequelize({
    host: 'dpg-cu03d15ds78s73euaojg-a',
    port: '5432',
    database: 'projetofinal_1zt5',
    username: 'projetofinal_1zt5_user',
    password: 'hkyqmm4SXX9D1YHcST6SPoLqDDom8SK5',
    dialect: 'postgres'
})

const modelos = { Categoria, Cliente, Funcionario, Lucrocusto, Produto, Pedido };

async function autoPopulate() {
try {
    for (const [nomeModelo, modelo] of Object.entries(modelos)) {
        console.log(`Sincronizando tabela: ${nomeModelo}...`);
        await modelo.sync(); // Garante que a tabela existe
        
        const count = await modelo.count(); // Conta registros existentes
        if (count === 0) {
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

export {conexao, autoPopulate};