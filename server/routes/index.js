import express from "express";
import produto from "./produto.js"

const routes = express.Router();

routes.use("/produto",produto);

routes.use((req, res) => res.status(404).json({ error: "Rota não encontrada" }));

export default routes;