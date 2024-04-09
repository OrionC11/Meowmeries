const { User } = require('../models');

const userData = [
    {
      username: "CoolCat123",
      email: "coolcat123@gmail.com",
      password: "password",
      first_name: "Tabby",
      last_name: "Cat",
      cat_name: "Captain Wiskers",
      cat_age: "3",
      cat_breed: "Short Hair"
    },
    {
      username: "WildCat99",
      email: "wildcat99@gmail.com",
      password: "<PASSWORD>",
      first_name: "Maxwell",
      last_name: "Feline",
      cat_name: "Rocko",
      cat_age: "6",
      cat_breed: "Persian"
    },
    {
      username: "StrayCat54",
      email: "straycat54@gmail.com",
      password: "<PASSWORD>",
      first_name: "Sara",
      last_name: "Sadness",
      cat_name: "Fluffikins",
      cat_age: "7",
      cat_breed: "Siamese"
    }  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
