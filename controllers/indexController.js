const pizzas = require('../database/Pizzas.json')
const path = require('path')
const fs = require('fs')

const indexController = {
  index: (req, res)=>{
      return res.render('index', {pizzas});
  },
  pizza: (req, res)=>{
    let {id} = req.params

    let pizza = pizzas.find( pizza => id == pizza.id)

    return res.render('pizza', {pizza})
  },
  create: (req, res)=>{
    return res.render('cadastroPizza')
  },
  store: (req, res)=>{
    let {nome, ingredientes, preco} = req.body

    //id
    let id = pizzas.length + 1

    //ingrediente
    ingredientes = ingredientes.split(',')

    pizzas.push({
      id: id,
      nome: nome,
      ingredientes: ingredientes,
      preco: preco,
      img: null, 
      destaque: false
    })

    let caminho = path.join('database', 'Pizzas.json')
    let pizzaJson = JSON.stringify(pizzas)
    fs.writeFileSync(caminho, pizzaJson)

    res.redirect('/')
  }
}

module.exports = indexController;
