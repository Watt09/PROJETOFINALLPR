import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    host: 'dpg-cu03d15ds78s73euaojg-a',
    port: '5432',
    database: 'projetofinal_1zt5',
    username: 'projetofinal_1zt5_user',
    password: 'hkyqmm4SXX9D1YHcST6SPoLqDDom8SK5',
    dialect: 'postgres'
})

export default conexao;