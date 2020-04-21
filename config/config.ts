export default{
  development: {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "express-ts"
  },
  "test": {
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test"
  },
  "production": {
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test"
  }
}
