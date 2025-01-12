import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Lucrocusto = conexao.define('Lucrocusto', {
    lucro_bruto: DataTypes.DECIMAL(10, 2),
    fp: DataTypes.DECIMAL(10, 2),
    cmat: DataTypes.DECIMAL(10, 2),
    cman: DataTypes.DECIMAL(10, 2),
    lucro_liquido: DataTypes.DECIMAL(10, 2),

});


export default Lucrocusto;