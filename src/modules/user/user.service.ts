import { DataSource, Repository } from "typeorm";
import { User } from "./entity/User";
import { CreateUserDto } from "./dtos";

export class UserService {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  async getAllUser(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
