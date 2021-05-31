module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [__dirname + `/${process.env.DIR}/models/*{.ts,.js}`],
  migrations: [
    __dirname + `/${process.env.DIR}/database/migrations/*{.ts,.js}`,
  ],
  cli: {
    migrationsDir: `./src/database/migrations/`,
    entitiesDir: `src/models`,
  },
};
