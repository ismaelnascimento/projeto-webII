module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posttext: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };

  return Posts;
};
