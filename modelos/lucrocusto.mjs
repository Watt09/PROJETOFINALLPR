import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";
import Funcionario from "./funcionario.mjs";

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
    type: DataTypes.VIRTUAL,
    get() {
        return this.sequelize.models.Funcionario.sum('salario') 
            .catch(error => {
                console.error('Erro ao calcular fp:', error);
                return 0;
            });
    },
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
