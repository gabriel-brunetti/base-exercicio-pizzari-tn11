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

    let img = "/img/"+req.files[0].originalname

    pizzas.push({
      id: id,
      nome: nome,
      ingredientes: ingredientes,
      preco: preco,
      img: img, 
      destaque: false
    })

    let caminho = path.join('database', 'Pizzas.json')
    let pizzaJson = JSON.stringify(pizzas)
    fs.writeFileSync(caminho, pizzaJson)

    res.redirect('/')
  },
  edit: (req, res) => {
    let { id } = req.params;
    let pizza = pizzas.find( pizza => id == pizza.id)

    res.render('editar',{ pizza });
  },
  update: (req, res) => {
    let { id } = req.params;
    let pizza = pizzas.find( pizza => id == pizza.id)

    let { nome, ingredientes, preco} = req.body;
    pizza.nome = nome;
    pizza.ingredientes = ingredientes.split(',');
    pizza.preco = preco;

    fs.writeFileSync(path.join('database', 'Pizzas.json'), JSON.stringify(pizzas))

    res.redirect(`/pizza/${id}`);
  }
}

module.exports = indexController;
