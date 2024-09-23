import { DataTypes } from "sequelize"; 
import { database } from "../database/connection.js";
import { Donor } from "./Donor.model.js";
import { Request } from "./Request.model.js";

export const Donation = database.define('Donation', {

    donation_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    date_donation: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    validity: {
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

    donor_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Donor,
            key: 'donor_id'
        }
    },

    request_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Request,
            key: 'request_id'
        }
    }
})