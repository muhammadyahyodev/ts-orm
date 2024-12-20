import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./modules/user/entity/User";
import { ModuleRegistry } from "./module-registry";
import * as dotenv from "dotenv";
import Logger from "./config/logger";

// Load environment variables
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false, // or process.env.NODE_ENV === "development",
  entities: [User],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});

(async () => {
  try {
    // Initialize Data Source
    await AppDataSource.initialize();
    Logger.info("Database connected successfully!");

    // Register and initialize all modules
    await ModuleRegistry.initialize(AppDataSource);

    Logger.info("All modules initialized successfully!");
  } catch (error) {
    Logger.error("Error initializing application:", error);
  }
})();
