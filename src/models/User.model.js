import { DataTypes } from "sequelize"; 
import { database } from "../database/connection.js";
import { Address } from "./Address.model.js";


export const User = database.define('User', {

    user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    phone: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },

    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    address_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Address,
            key: 'address_id'
        }
    }
})
