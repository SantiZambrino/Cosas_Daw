const { application } = require('express');
const express = require('express');
const app = express();
const morgan=require('morgan');

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
      console.log("Result: " + JSON.stringify(result));
    });
  });


//Routes
app.use(require('./routes/index'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

app.get("/user", (req,res)=>{
    const name = req.query.name;
    let sql = `SELECT * FROM lista_usuario`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
});

app.post("/editUsuario",(req, res)=>{
    // const dni = req.body.dni
    const name = req.body.nombre;
    // const apellido = req.body.apellidos;
    
    const sql = "update usuarios set nombre =" + name
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
})

