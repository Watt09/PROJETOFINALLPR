import {Router} from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_pedido.mjs";
const rotas_pedido=Router();

rotas_pedido.post('/cadastrar', novo);
rotas_pedido.get('/listar', todos);
rotas_pedido.put('/editar', altera);
rotas_pedido.delete('/excluir', exclui);
rotas_pedido.get('/listar/:id',um);

export default rotas_pedido;