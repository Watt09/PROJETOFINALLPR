import express from 'express';
import rotas_clientes from './rotas/rotas_clientes.mjs';
import rotas_produto from './rotas/rotas_produto.mjs';
import rotas_pedido from './rotas/rotas_pedido.mjs';
import rotas_categoria from './rotas/rotas_categoria.mjs';
import rotas_funcioanrio from './rotas/rotas_funcioanrio.mjs';
import conexao from './modelos/sync.mjs'

const app = express();

app.use(express.json());
app.use('/clientes', rotas_clientes);
app.use('/produto', rotas_produto);
app.use('/categoria', rotas_categoria);
app.use('/pedido', rotas_pedido);
app.use('/funcionario', rotas_funcioanrio);
app.use(express.static('./views/clientes'));
app.use(express.static('./views/categoria'));
app.use(express.static('./views/produto'));
app.use(express.static('./views/pedido'));
app.use(express.static('./views/pedido'));
app.use(express.static('./views/funcioanrio'));

app.listen(80, function () {
    console.log('Escutando.')
});
