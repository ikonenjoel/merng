const posts = require('./posts.js');
const postsResolvers = require('./posts.js');
const usersResolvers = require('./users.js');
const commentsResolvers = require('./comments.js');

module.exports= {
  Post: {
    likeCount: (parent) => parent.comments.length,
    commentCount: (parent) => parent.comments.length
  },
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  }
};