const { Schema, model } = require('mongoose');

const Users = new Schema({
  nome: {
    type: 'String',
    required: true
  }, 
  idade: {
    type: 'Number'
  },
  hobbies: []
}, {
  timestamps: true
});

module.exports = model('Users', Users);