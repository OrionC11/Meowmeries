const User = require("./User");
const Image = require("./Image");
const Post = require("./Post");

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasOne(Image, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
})

Image.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Image, Post };