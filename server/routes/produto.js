import { Router } from "express";
import { ProdutoController } from "../controllers/index.js";
const router = Router();

router.post('/create', ProdutoController.create);
router.get('/list', ProdutoController.list);
router.delete('/delete/:id', ProdutoController.delete);


export default router;