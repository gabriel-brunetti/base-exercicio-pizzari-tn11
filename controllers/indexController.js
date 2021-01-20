const pizzas = require('../database/Pizzas.json')

const indexController = {
  index: (req, res)=>{
      return res.render('index', {pizzas});
  },
  pizza: (req, res)=>{
    return res.render('pizza')
  },
  create: (req, res)=>{
    return res.render('cadastroPizza')
  },
  store: (req, res)=>{
    let {nome, ingredientes, preco} = req.body

    pizzas.push({
      "id": null,
      "nome":nome,
      "ingredientes":ingredientes,
      "preco": preco,
      "img": null, 
      "destaque": false
    })

    res.redirect('/')
  }
}

module.exports = indexController;
