// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // importante para Render
    }
  },
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('✅ Conectado a PostgreSQL en Render'))
  .catch(err => console.error('❌ Error al conectar:', err));

module.exports = sequelize;
