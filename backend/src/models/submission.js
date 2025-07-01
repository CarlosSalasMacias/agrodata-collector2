module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission',{
    data: DataTypes.JSONB,
    synced: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Submission;
};