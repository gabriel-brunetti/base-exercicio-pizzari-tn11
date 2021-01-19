const pizzas = require('../database/Pizzas.json')

const indexController = {
  index: (req, res)=>{
      return res.render('index', {pizzas});
  },
  pizza: (req, res)=>{
    return res.render('pizza', )
  }
}

module.exports = indexController;
