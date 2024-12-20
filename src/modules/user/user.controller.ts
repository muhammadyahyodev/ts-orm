import { UserService } from "./user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAllUsers() {
    const users = await this.userService.getAllUser();
    console.log(users);
  }
}
