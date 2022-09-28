const axios = require('axios');

exports.homeRoutes = (req, res) => {

    axios.get('http://localhost:3000/api/products')
    .then(function(response){
        res.render('index', { products : response.data});
    })
    .catch(err =>{
        res.send(err);
    })
    
}

exports.add_product = (req, res) =>{
    res.render('add_product');
}

exports.update_product = (req, res) =>{
    axios.get('http://localhost:3000/api/products/', {params: { id : req.query.id }})
    .then(function(productdata){
        res.render("update_product", { product : productdata.data})
    })
    .catch(err => {
        res.send(err);
    })
}