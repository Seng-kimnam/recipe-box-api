"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRecipeAndUser1793350014714 = void 0;
class CreateTableRecipeAndUser1793350014714 {
    name = 'CreateTableRecipeAndUser1793350014714';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }
}
exports.CreateTableRecipeAndUser1793350014714 = CreateTableRecipeAndUser1793350014714;
//# sourceMappingURL=1793350014714-CreateTableRecipeAndUser.js.map