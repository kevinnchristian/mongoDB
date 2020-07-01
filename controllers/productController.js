const Products = require('../models/Products');

const productController = {
  index: async (req, res) => {
    const products = await Products.find();

    return res.status(200).json(products);
  }, 

  create: async (req, res) => {
    const { nome, preco, descricao, quantidade } = req.body;

    const newProduct = await Products.create({
      nome,
      preco,
      descricao,
      quantidade
    });

    return res.status(201).json(newProduct);

  }
};

module.exports = productController;