import conexao from "../database/mysql.mjs";
import Pedido from "./pedido.mjs";
import Produto from "./produto.mjs";
import Cliente from "./cliente.mjs";
import Categoria from "./categoria.mjs";

Produto.belongsToMany(Pedido, { through: 'PedidoProduto' });
Pedido.belongsToMany(Produto, { through: 'PedidoProduto' });

Pedido.belongsTo(Cliente);
Cliente.hasMany(Pedido);

Produto.belongsTo(Categoria);
Categoria.hasMany(Produto);


conexao.sync({ alter: true })
  .then(() => console.log("Banco sincronizado com sucesso!"))
  .catch(err => console.error("Erro ao sincronizar banco:", err));


export default conexao;