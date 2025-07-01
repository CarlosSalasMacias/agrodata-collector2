module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    schema: DataTypes.JSONB
  });
  return Form;
};