module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
    Users.hasMany(models.Comments, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "no action",
    });
  };

  return Users;
};
