import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    database: 'projetofinal_1zt5',
    username: 'projetofinal_1zt5_user',
    password: 'hkyqmm4SXX9D1YHcST6SPoLqDDom8SK5',
    dialect: 'mysql'
})

export default conexao;
