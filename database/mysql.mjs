import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    host: 'dpg-cu03d15ds78s73euaojg-a',
    port: '5432',
    database: 'projetofinal_1zt5',
    username: 'projetofinal_1zt5_user',
    password: 'hkyqmm4SXX9D1YHcST6SPoLqDDom8SK5',
    dialect: 'postgres'
})

async function populateDatabase() {

    const insertStatements = [
        // Inserts para a tabela categoria
        `INSERT INTO categoria (nome, descricao, createdAt, updatedAt) VALUES
        ('Ferramentas Manuais', 'Martelos, alicates, chaves e outras ferramentas manuais', '2025-01-09', '2025-01-09'),
        ('Materiais de Construção', 'Cimento, areia, brita, e tijolos para obras', '2025-01-09', '2025-01-09'),
        ('Elétrica', 'Fios, cabos, disjuntores, e outros materiais elétricos', '2025-01-09', '2025-01-09'),
        ('Hidráulica', 'Canos, conexões, torneiras e outros materiais hidráulicos', '2025-01-09', '2025-01-09'),
        ('Tinta e Pintura', 'Tinta, pincéis, rolos e outros itens para pintura', '2025-01-09', '2025-01-09'),
        ('Ferramentas Elétricas', 'Furadeiras, serras elétricas e outras ferramentas elétricas', '2025-01-09', '2025-01-09'),
        ('EPI', 'Equipamentos de proteção individual, como capacetes e luvas', '2025-01-09', '2025-01-09'),
        ('Jardinagem', 'Ferramentas e acessórios para jardinagem', '2025-01-09', '2025-01-09'),
        ('Iluminação', 'Lâmpadas, luminárias e outros produtos de iluminação', '2025-01-09', '2025-01-09'),
        ('Acabamentos', 'Revestimentos, pisos, rodapés e outros itens de acabamento', '2025-01-09', '2025-01-09')`,

        // Inserts para a tabela clientes
        `INSERT INTO clientes (primeiro_nome, sobrenome, cpf, email, nascimento, createdAt, updatedAt) VALUES
        ('João', 'Silva', '123.456.789-00', 'joao.silva@email.com', '1990-05-15', '2025-01-09 10:00:00', '2025-01-09 10:00:00'),
        ('Maria', 'Oliveira', '234.567.890-11', 'maria.oliveira@email.com', '1985-09-23', '2025-01-09 10:05:00', '2025-01-09 10:05:00'),
        ('Pedro', 'Santos', '345.678.901-22', 'pedro.santos@email.com', '1992-12-10', '2025-01-09 10:10:00', '2025-01-09 10:10:00'),
        ('Ana', 'Souza', '456.789.012-33', 'ana.souza@email.com', '1995-03-30', '2025-01-09 10:15:00', '2025-01-09 10:15:00'),
        ('Lucas', 'Pereira', '567.890.123-44', 'lucas.pereira@email.com', '1988-07-19', '2025-01-09 10:20:00', '2025-01-09 10:20:00'),
        ('Beatriz', 'Almeida', '678.901.234-55', 'beatriz.almeida@email.com', '1993-11-11', '2025-01-09 10:25:00', '2025-01-09 10:25:00'),
        ('Carlos', 'Gomes', '789.012.345-66', 'carlos.gomes@email.com', '1990-08-25', '2025-01-09 10:30:00', '2025-01-09 10:30:00'),
        ('Fernanda', 'Mendes', '890.123.456-77', 'fernanda.mendes@email.com', '1987-01-20', '2025-01-09 10:35:00', '2025-01-09 10:35:00'),
        ('Ricardo', 'Lima', '901.234.567-88', 'ricardo.lima@email.com', '1991-06-15', '2025-01-09 10:40:00', '2025-01-09 10:40:00'),
        ('Patrícia', 'Costa', '012.345.678-99', 'patricia.costa@email.com', '1989-04-05', '2025-01-09 10:45:00', '2025-01-09 10:45:00')`,

        // Inserts para a tabela produtos
        `INSERT INTO produtos (nome, preco, quantidade, categoria_id, createdAt, updatedAt) VALUES
        ('Martelo de Borracha', 25.90, 50, 1, '2025-01-09 12:00:00', '2025-01-09 12:00:00'),
        ('Cimento 50kg', 35.00, 100, 2, '2025-01-09 12:05:00', '2025-01-09 12:05:00'),
        ('Fio Elétrico 2,5mm', 120.75, 200, 3, '2025-01-09 12:10:00', '2025-01-09 12:10:00'),
        ('Torneira PVC', 18.50, 150, 4, '2025-01-09 12:15:00', '2025-01-09 12:15:00'),
        ('Tinta Acrílica Branca 18L', 250.00, 20, 5, '2025-01-09 12:20:00', '2025-01-09 12:20:00'),
        ('Furadeira 500W', 189.90, 30, 6, '2025-01-09 12:25:00', '2025-01-09 12:25:00'),
        ('Capacete de Segurança', 45.00, 70, 7, '2025-01-09 12:30:00', '2025-01-09 12:30:00'),
        ('Pá para Jardinagem', 22.50, 40, 8, '2025-01-09 12:35:00', '2025-01-09 12:35:00'),
        ('Lâmpada LED 10W', 12.90, 300, 9, '2025-01-09 12:40:00', '2025-01-09 12:40:00'),
        ('Porcelanato 60x60', 59.90, 100, 10, '2025-01-09 12:45:00', '2025-01-09 12:45:00')`,

        // Inserts para a tabela pedidos
        `INSERT INTO pedidos (id_cliente, id_produto, valor, data, createdAt, updatedAt) VALUES
        (1, 1, 150.00, '2025-01-08', '2025-01-09 11:00:00', '2025-01-09 11:00:00'),
        (2, 2, 200.50, '2025-01-08', '2025-01-09 11:05:00', '2025-01-09 11:05:00'),
        (3, 3, 350.75, '2025-01-07', '2025-01-09 11:10:00', '2025-01-09 11:10:00'),
        (4, 4, 120.00, '2025-01-07', '2025-01-09 11:15:00', '2025-01-09 11:15:00'),
        (5, 5, 75.99, '2025-01-06', '2025-01-09 11:20:00', '2025-01-09 11:20:00'),
        (6, 6, 99.90, '2025-01-06', '2025-01-09 11:25:00', '2025-01-09 11:25:00'),
        (7, 7, 180.00, '2025-01-05', '2025-01-09 11:30:00', '2025-01-09 11:30:00'),
        (8, 8, 250.00, '2025-01-05', '2025-01-09 11:35:00', '2025-01-09 11:35:00'),
        (9, 9, 300.00, '2025-01-04', '2025-01-09 11:40:00', '2025-01-09 11:40:00'),
        (10, 10, 400.00, '2025-01-04', '2025-01-09 11:45:00', '2025-01-09 11:45:00')`
    ];

    try {
        const connection = await mysql.createConnection(conexao);
        console.log('Conectado ao banco de dados.');

        for (const query of insertStatements) {
            await connection.query(query);
            console.log('Execução concluída para:', query.slice(0, 50), '...');
        }

        await connection.end();
        console.log('Inserções concluídas e conexão encerrada.');
    } catch (error) {
        console.error('Erro ao popular banco de dados:', error.message);
    }
}

populateDatabase();

export default conexao;
