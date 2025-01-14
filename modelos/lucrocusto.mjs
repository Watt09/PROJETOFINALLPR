import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Lucrocusto = conexao.define('Lucrocusto', {
  mes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lucro_bruto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fp: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cmat: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cman: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  lucro_liquido: {
    type: DataTypes.VIRTUAL,
    get() {
      const lucroBruto = parseFloat(this.getDataValue('lucro_bruto')) || 0;
      const fp = parseFloat(this.getDataValue('fp')) || 0;
      const cmat = parseFloat(this.getDataValue('cmat')) || 0;
      const cman = parseFloat(this.getDataValue('cman')) || 0;
      return (lucroBruto - fp - cmat - cman).toFixed(2);
    },
  },
});

export default Lucrocusto;
