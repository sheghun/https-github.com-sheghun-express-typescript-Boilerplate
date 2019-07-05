import path from "path";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

if ((process.env.NODE_ENV as string).toLowerCase() !== "production") {
	dotenv.config({ path: path.join(`${__dirname}/../.env`) });
} else {
	dotenv.config({ path: path.join(`${__dirname}/../.env.production`) });
}

// Connect to the mysql Database
export const sequelize = new Sequelize(process.env.DB_URL as string, {});
export const ENVIRONMENT = process.env.NODE_ENV;
