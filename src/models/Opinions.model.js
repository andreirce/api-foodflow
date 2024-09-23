import { database } from "../database/connection.js";
import { DataTypes } from "sequelize";
import { User } from "./User.model.js";

export const Opinion = database.define('Opinio', {

    opinion_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },

    text: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },

    grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: 'A nota é obrigatória' },

            min: {
                args: [1],
                msg: 'A nota deve ser no mínimo 1'
            },
            
            max: {
                args: [5],
                msg: 'A nota deve ser no máximo 5'
            }
        }

    }

})
