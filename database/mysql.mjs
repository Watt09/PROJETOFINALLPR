import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    database: 'bdlpr1',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})

export default conexao;