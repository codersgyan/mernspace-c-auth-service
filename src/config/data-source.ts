import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Config } from ".";
import { RefreshToken } from "../entity/RefreshToken";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: Config.DB_HOST,
    port: Number(Config.DB_PORT),
    username: Config.DB_USERNAME,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    // Don't use this in production. Always keep false
    synchronize: false,
    logging: false,
    entities: [User, RefreshToken],
    migrations: [],
    subscribers: [],
});
