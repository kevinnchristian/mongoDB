const Users = require('../models/Users');

const userController = {
  index: async (req, res) => {
    const users = await Users.find();

    return res.status(200).json(users);
  }, 

  create: async (req, res) => {
    const { nome, idade, hobbies } = req.body;

    const newUser = await Users.create({
      nome,
      idade,
      hobbies
    });

    return res.status(201).json(newUser);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    const user = await Users.findByIdAndUpdate(id, {
        nome, 
        idade 
    }, { new: true });
    return res.status(201).json(user);
  },

  delete: async(req, res) => {
    const { id } = req.params;
    
    const user = await Users.findByIdAndDelete(id);
    return res.sendStatus(204);
  }
};

module.exports = userController;