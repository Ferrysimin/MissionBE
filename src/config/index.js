const config = {
  port: process.env.PORT || 3001, //
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "", //
    database: process.env.DB_NAME || "edu_course", // ganti sesuai database kamu
    port: process.env.DB_PORT || 3306,
  },
};

module.exports = config;
