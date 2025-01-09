import {Router} from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_produto.mjs";
const rotas_produto=Router();
rotas_produto.post('/cadastrar', novo);
rotas_produto.get('/listar', todos);
rotas_produto.put('/editar', altera);
rotas_produto.delete('/excluir', exclui);
rotas_produto.get('/listar/:id',um);

export default rotas_produto;