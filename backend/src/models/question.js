module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question',{
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    options: DataTypes.JSONB,
    required: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Question;
};