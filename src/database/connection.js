import { Sequelize } from "sequelize";
import "dotenv/config"



export const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT || 5432,
        logging: false, 
        dialectOptions: {
            ssl: {
                require: true, 
                rejectUnauthorized: false 
            }
        }
    }
);


try {
    await database.authenticate();
    console.log('Connection to the database has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}