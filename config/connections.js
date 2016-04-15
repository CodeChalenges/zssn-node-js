module.exports.connections = {
  zssn-postgres: {
    connection: {
      database: "zssn-postgres",
      host: "db",
      user: "postgres",
      password: "db",
      port: "5432",
      ssl: false
    },

    pool: {
      min: 2,
      max: 20
    }
  }
}
