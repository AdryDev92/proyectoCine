class Pelicula{
    constructor(nombre,genero,director,actores,anio,mes,descripcion,duracion,puntuacion,valoracion){
        this.nombre = nombre;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
        this.anio = anio;
        this.mes = mes;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.puntuacion = puntuacion;
    }
}

class Usuario{
    constructor(nombre){
    this.nombre=nombre;
    }
}

class Genero{
    constructor(nombre){
    this.nombre=nombre;
    }
}

class Votacion{
    constructor(nota,comentario,usuario){
    this.nota=nota;
    this.comentario=comentario;
    this.usuario=usuario
    }
}

let terror = new Genero("terror");
let ciencia_ficcion = new Genero("ciencia_ficcion");
let romance = new Genero("romance");
let comedia = new Genero("comedia");
let accion = new Genero("accion");
let aventuras = new Genero("aventuras");
let drama = new Genero("drama");
let infantiles = new Genero("infantiles");
let misterio = new Genero("misterio");

let arrayPeliculas = [
    new Pelicula("matrix",["ciencia_ficcion"],"lilly wachowski","Keanu Reeves","1999","junio","Muy Buena","60 min","5"),
    new Pelicula("matrix reloaded",["ciencia_ficcion"],"Lilly Wachowski","Keanu Reeves","2001","junio","Muy Buena","120 min","5"),
    new Pelicula("elfrancotirador",["accion"],"Clint Eastwood","Bradley Cooper", "2014","febrero","Muy buena","90 min","4"),
    new Pelicula("blade",["comedia"],"Stephen Norrington","Wesley Snipes","1998","mayo","Normalita","60 min","3"),
    new Pelicula("hulk",["romantica"],"Jack Kirby","Mark Ruffalo","1962","octubre","Mala","180 min","5"),
    new Pelicula("toc toc",["comedia"],"Vicente Villanueva","Paco León","2017","octubre","Muy buena","96 min","9"),
    new Pelicula("thor ragnarok",["ciencia ficcion"],"Taika Waititi","Chris Hemsworth","2017","octubre","Buena","130 min","8"),
    new Pelicula("blade runner",["ciencia ficcion"],"Denis Villeneuve","Ryan Gosling","2017","octubre","Buena","163 min","5"),
    new Pelicula("it",["miedo"],"Andrés Muschietti","Sophia Lilis","2017","septiembre","normal","135 min","5")
]; 

let arrayUsuarios = [
	new Usuario("fran"),
	new Usuario("manolo"),
	new Usuario("alvaro"),
	new Usuario("antonio")
]