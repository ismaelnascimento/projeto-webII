module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });

    Comments.belongsTo(models.Posts, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return Comments;
};
