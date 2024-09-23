import { database } from "../database/connection.js";
import { DataTypes } from "sequelize";
import { User } from "./User.model.js";

export const Request = database.define('Request',{

    request_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    
    date_request: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    type_food: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }

    }

})