import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Produto = conexao.define ('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10, 2),
    quantidade: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER,
})

export default Produto; 