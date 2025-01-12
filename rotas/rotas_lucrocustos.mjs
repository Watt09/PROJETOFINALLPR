import { Router } from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_lucrocusto.mjs";

const rotas_lucrocusto = Router();

rotas_lucrocusto.post('/cadastrar', novo);
rotas_lucrocusto.get('/listar', todos);
rotas_lucrocusto.put('/editar', altera);
rotas_lucrocusto.delete('/excluir', exclui);
rotas_lucrocusto.get('/listar/:id',um);

export default rotas_lucrocusto;