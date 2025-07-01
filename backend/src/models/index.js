const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Form = require('./form')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);
db.Submission = require('./submission')(sequelize, Sequelize);

// Associations
db.Form.hasMany(db.Question, { as: 'questions' });
db.User.hasMany(db.Submission);
db.Form.hasMany(db.Submission);

module.exports = db;