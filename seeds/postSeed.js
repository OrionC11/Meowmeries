const { Post } = require('../models');

const postData = 
[
  {
    title: "Loot at my Cute Cat",
    content: "OMG I just turned around and look how he's posing no prompting at all!",
    user_id: 1
  }, 
  {
    title: "Mr Whiskers take a bath",
    content: "Mr Whiskers loves bathtime!",
    user_id: 1
  }, 
  {
    title: "My cat loves to play",
    content: "He's a silly cat-goose",
    user_id: 1
  }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost; 
