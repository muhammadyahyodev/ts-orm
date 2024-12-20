import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1734689411351 implements MigrationInterface {
    name = 'CreateTableUser1734689411351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "is_ban" boolean NOT NULL DEFAULT false
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "is_ban"
        `);
    }

}
