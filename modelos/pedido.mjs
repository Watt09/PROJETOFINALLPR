import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Pedido = conexao.define('Pedido', {
    
    id_cliente: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.STRING,
    
});


export default Pedido;