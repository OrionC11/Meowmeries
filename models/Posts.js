const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {

}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB(),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: 'id',
      },
    },
    sequelize, 
    timestamps: false,
    freezeTablName: true,
    underscored: true,
    modelName: 'Post',
  })

  module.exports = Post;