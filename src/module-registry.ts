// src/module-registry.ts
import { DataSource } from "typeorm";
import { UserModule } from "./modules/user/user.module";
import Logger from "./config/logger";

export class ModuleRegistry {
  static async initialize(dataSource: DataSource) {
    const modules = [UserModule];

    for (const module of modules) {
      module.initialize(dataSource);
      Logger.info(`${module.name} initialized.`);
    }
  }
}
