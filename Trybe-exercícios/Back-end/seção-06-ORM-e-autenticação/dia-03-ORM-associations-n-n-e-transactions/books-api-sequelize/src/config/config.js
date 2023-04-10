const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {...config, database: process.env.MYSQL_DATABASE_DEV },
  test: {...config, database: process.env.MYSQL_DATABASE_TESTS },
  production: {...config, database: process.env.MYSQL_DATABASE_PRO },
};
