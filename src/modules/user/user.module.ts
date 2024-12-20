import { DataSource } from "typeorm";
import { UserService } from "./user.service";
import User from "./entity/User";
import { UserController } from "./user.controller";

export class UserModule {
  static initialize(dataSource: DataSource) {
    // Register User entity with the data source
    dataSource.setOptions({
      entities: [User],
    });

    return {
      controller: new UserController(new UserService(dataSource)),
      service: new UserService(dataSource),
    };
  }
}
