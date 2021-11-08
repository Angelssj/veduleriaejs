const express = require ("express");
const app = express();
const path = require("path")
const port = 3000;


app.listen(port, () => console.log('Example app listening on port 4000!'));

app.use(express.json());
app.use( express.static( "public" ) );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('public',path.join(__dirname, '/public'));


let productos = {
    "naranja": {"name":"Naranja",'precio':5,"tipo":"fruta","stock":true,"img": '/img/naranj.jpg'},
    "lechuga": {"name":"Lechuga",'precio': 12,"tipo":"verdura","stock": true,"img": '/img/lechu.jpg'},
    "manzana": {"name":"Manzana",'precio':3,"tipo":"fruta","stock":true,"img": '/img/manza.jpg'},
    "pera": {"name":"Pera",'precio':15,"tipo":"fruta","stock":false,"img": '/img/pera.jpg'},
    "sandia": {"name":"Sandia",'precio': 40,"tipo":"fruta","stock":false,"img": '/img/sandia.jpg'},
    "zanahoria":{"name":"Zanahoria",'precio':16,"tipo":"verdura","stock":true,"img": '/img/zana.jpg'},
    "zapallo":{"name":"Zapallo",'precio':25,"tipo":"verdura","stock":true,"img": '/img/zapal.jpg'},
    "espinaca":{"name":"Espinaca",'precio':30,"tipo":"verdura","stock":false,"img": '/img/espin.jpg'},
    "frutilla":{"name":"Frutilla",'precio':20,"tipo":"frutilla","stock":true,"img": '/img/fruti.jpg'},
}

app.get('/verdu',function (req,res){
    let name = " La verdu ejs ";
    res.render('prueba.ejs',{productos:productos});
});