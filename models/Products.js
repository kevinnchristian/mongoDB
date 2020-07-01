const { Schema, model } = require('mongoose');

const Products = new Schema({
  nome: {
    type: 'String',
    required: true
  }, 
  descricao: {
    type: 'String',
  }, 
  preco: {
    type: 'Number',
    required: true
  },
  quantidade: {
    type: 'Number',
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Products', Products);