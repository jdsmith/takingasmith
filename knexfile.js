// Update with your config settings.
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'takingasmith',
    user:     process.env.WEDDING_DB_USERNAME,
    password: process.env.WEDDING_DB_PASSWORD,
    host: process.env.WEDDING_DB_HOST,
    port: process.env.WEDDING_DB_PORT
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
