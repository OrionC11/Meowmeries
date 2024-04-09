const sequelize = require('../config/connection');
const { Users, Posts } = require('../models');

const usersData = require('./usersData.json');
const postsData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  for (const Posts of postsData) {
    await Posts.create({
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

