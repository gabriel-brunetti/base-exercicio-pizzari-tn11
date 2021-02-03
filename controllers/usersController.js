const users = require('../database/users.json');

const usersController = {
    login: (req, res) => {
        return res.render('login')
    },
    auth: (req, res) => {
        let { email, senha } = req.body

        let user = users.find( user => user.email === email)

        if(user !== undefined){
            if(user.senha === senha) {
                req.session.user = user.name
                res.redirect('/users/menu')
            } 
            res.redirect('/users/login')
        } else {
            res.send("Usuário não encontrado.")
        }
    },
    menu: (req, res) => {
        return res.render('menu')
    }
}

module.exports = usersController;