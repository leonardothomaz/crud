import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateClient1622563775354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "lastname",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "sex",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "birthDate",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "age",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "city_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
        "client",
        new TableForeignKey({
          name: "clientCity",
          columnNames: ["city_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "city",
          onDelete: "NO ACTION",
          onUpdate: "CASCADE",
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("client", "clientCity");
    await queryRunner.dropTable("client");
  }
}
