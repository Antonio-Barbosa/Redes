import Produto from "../entities/produto.js";


class ProdutoController {
    async create(req, res) {
        try {
            await Produto.create({
                nome: req.body.nome,
                descricao: req.body.descricao
            });
            res.status(201).json({message:"Produto cadastrada"});

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async list(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }


    async delete(req, res) {
        try {
            await Produto.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({ message: "Produto Removido" });

        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}

export default new ProdutoController();