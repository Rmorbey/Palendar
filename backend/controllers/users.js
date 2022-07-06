const User = require('../models/users');

const UserController = {

  CreateNewUser: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const user = await User.create({ name, email, password });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  LoginUser: (req, res) => {
    res.json({ message: 'Logged in!' });
  },
};

module.exports = UserController;