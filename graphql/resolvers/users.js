const User = require('../../models/User');

module.exports = {
  Mutation: {
    register(_, { registerInput: { username, email, password, confirmPassword }}, context, info) {
      // TODO: Validate user data
      // Todo: make sure user doesn't already exist
      // Todo: Hash password and creat an auth token

    }
  }
}