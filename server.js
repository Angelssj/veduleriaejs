    const express = require ("express");
    const app = express();
    const path = require("path")
    const port = 2500;

    app.listen(port, () => console.log('listo'));
    app.use(express.json());
    app.use( express.static( "public" ) );
    app.set('view engine', 'ejs');
    
    app.set('views', path.join(__dirname, '/views'));
    app.set('public',path.join(__dirname, '/public'));


let peliculas =  {
    
        "inception":{"titulo":"inception","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/inception.png'},
        "tenet":{"titulo":"tenet","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/tenet.jpg'},
        "taxi driver":{"titulo":"taxi driver","director":"scorsese",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/taxi driver.jfif'},
        "goodfellas":{"titulo":"goodfellas","director":"scorsese",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/goodfellas.jfif'},
        "your name?":{"titulo":"your name?","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/your name.jpg'},
        "no respires":{"titulo":"no respires","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":true,"img": '/img/no respires.jfif'},
        "jurasic park":{"titulo":"jurassic park","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/jurassic park.jpg'},
        "iron man":{"titulo":"iron man","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/iron man.jpg'},
        "capitan america":{"titulo":"capitan america","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/capitan america.jpg'},
        "star wars":{"titulo":"star wars","director":"nolan",'duracion':10,"genero":"drama","disponivilidad":false,"img": '/img/star wars.jpg'},
    }
app.get('/videoclub',function (req,res){
    res.render('prueba.ejs',{peliculas:peliculas });
}) ;
app.get('/disponible',function (req,res){
    res.render('disponible.ejs',{peliculas:peliculas });
}) ;
app.get('/terror',function (req,res){
    res.render('terror.ejs',{peliculas:peliculas });
}) ;
