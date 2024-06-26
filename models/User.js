const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [9],
            },

        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        cat_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cat_age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cat_breed: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
{
    hooks: {
        beforeCreate:async (newUserData) => {
            newUserData.password =await bcrypt.hash(newUserData.password, 10)
            return newUserData;
        },
        beforeUpdate:async (newUserData) => {
            newUserData.password =await bcrypt.hash(newUserData.password, 10)
            return newUserData;
        },
    },
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',

});

module.exports = User;