import { Sequelize } from "sequelize";
import connection from "../connection/index.js";

const Produto = connection.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        unique: true
    },
    descricao: {
        type: Sequelize.STRING
    }

});

export default Produto;