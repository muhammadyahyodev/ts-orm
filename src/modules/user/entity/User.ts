import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

interface UserCreationArgs {
  id: number;
  first_name: string;
  last_name: string;
  is_active: boolean;
}

@Entity()
export class User implements UserCreationArgs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column({ default: false })
  is_active!: boolean;

  @Column({ default: false })
  is_ban!: boolean;
}

export default User;
