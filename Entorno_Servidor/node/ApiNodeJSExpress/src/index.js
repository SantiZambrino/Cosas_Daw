const { application } = require('express');
const express = require('express');
const app = express();
const morgan=require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "10.192.240.25",
    port: "3307",
    user: "cuentaSanti",
    password: "1234",
    database: "bd_taller"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM lista_usuario;", function (err, result) {
      if (err) throw err;
    //   console.log("Result: " + JSON.stringify(result));
    
    });
  });


//Routes
app.use(require('./routes/index'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Obtener todos los usurios
app.get("/user", (req,res)=>{
    const name = req.query.name;
    let sql = `SELECT * FROM lista_usuario`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
});

//Obtener los usurios filtrados
app.get("/id_usuario", (req,res)=>{
    const id = req.query.id;
    let sql = `SELECT * FROM lista_usuario where id_usuario = ${id}`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
});

//Lista de vehículos filtrando por ID de usuario
app.get("/listaVehiculos", (req,res)=>{
    const id_usuario = req.query.id;
    let sql = `SELECT * FROM lista_vehiculos where id_usuario = ${id_usuario}`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
});

//Información de un vehículo filtrando por el ID del vehículo
app.get("/id_matricula", (req,res)=>{
    const id_matricula = req.query.id;
    let sql = `SELECT * FROM lista_vehiculos where id_matricula = ${id_matricula}`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
});

//Lista de servicios filtrando por un ID de vehículo
app.get("/lista_servicios",(req,res)=>{
    const matricula = req.query.matricula;
    let sql = `SELECT tipo_servicio FROM lista_servicios where id_matricula = ${matricula}`;
    con.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})

//Modificar datos de un usuario
app.post("/editUsuario",(req, res)=>{
    const dni = req.body.dni
    const name = req.body.nombre;
    const apellido = req.body.apellidos;
    
    const sql = `update usuarios set nombre = ${name}, apellidos = ${apellido}, dni = ${dni};` 
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
})

//Crear un nuevo usuario
//http://localhost:3000/insertUsu?id_usuario=5?name=Pepe,apellido=Gomez?71265347D?telefono=617524378?email=pepe@gmail.com?pass=caramelo123?id_admin=1

// const md5 = require('md5');

app.post("/insertUsu",(req, res)=>{
    // const id_usu = req.body.id_usu;
    const name = req.body.name;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const pass = req.body.pass;
    const id_admin = req.body.id_admin;
    // let { name, apellido, dni, telefono, email, pass, id_admin } = req.body;

    const sql = ` insert into lista_usuario(nombre,apellidos,dni,telefono,email,contrasena,id_admin) values('${name}','${apellido}','${dni}',${telefono},'${email}','${pass}',${id_admin})` 
         console.log(sql);
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
})
//Eliminar un usuario
app.post("/borrarUsu", (req,res)=>{
    const id_usu = req.body.id_usu;
    const sql =`delete from lista_usuario where id_usuario = ${id_usu}`;
    console.log(sql);
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })

})
//Modificar un vehiculo
/*
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

*/
app.post("/modificarVehiculo", (req,res)=>{
    const id_matricula = req.body.id_matricula;
    const marca = req.body.marca;
    const matricula = req.body.matricula;
    const modelo = req.body.modelo;
    const year = req.body.year;

    const sql = `update lista_vehiculos set marca = '${marca}', matricula = '${matricula}', modelo = '${modelo}', año = '${year}' where id_matricula = '${id_matricula}'`;
    
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})

//Crear un nuevo vehiculo
app.post("/crearVehiculo",(req, res)=>{
    const{matricula,marca,modelo,year,id_usuario} = req.body;
    
    const sql = ` insert into lista_vehiculos(matricula,marca,modelo,año,id_usuario) values('${matricula}','${marca}','${modelo}','${year}','${id_usuario}')`

    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
})
//Ver lista vehiculo
app.get("/listaVehiculo",(req,res)=>{
    const name = req.query.name;
    const sql = "select * from lista_vehiculos"
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
})
//Eliminar un nuevo vehiculo
app.post("/borrarVehiculo", (req,res)=>{
    const id_usu = req.body.id_usu;
    const sql =`delete from lista_vehiculos where id_usuario = ${id_usu}`;
    
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })

})
//Modificar un servicio
//Crear un nuevo servicio
//Eliminar un servicio
//Informacion de un usuario y su lista de vehiculos en la misma llamada filtrando por id usuario
//Informacion de un vehiculo y su lista de servicios en la misma llamada filtrando por id usuario
//Conectar base de datos Juanfran http://10.192.240.25:8080/phpmyadmin
