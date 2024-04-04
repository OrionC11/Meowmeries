const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Users.init(

    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            PrimaryKey: true,
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
        Last_name: {
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




)