const nome = "Zeca"

const indexController = {
  index: (req, res)=>{
      return res.render('index');
  },
  pizza: (req, res)=>{
    return res.render('pizza', {pizzas, nome} )
  }
}

module.exports = indexController;
