const { model, Schema } = require('mongoose');

//can specifiy here that fields are required, but we will specify on the graphql side versus the mongo side
const postSchema = new Schema({
  body: String,
  name: String,
  createdAt: String,
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Posts = model('Posts', postSchema);

module.exports = Posts;
