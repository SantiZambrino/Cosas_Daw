const { Router } = require('express');
const router = Router();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "10.192.240.18",
    port: "3307",
    user: "Desarrollador",
    password: "12345678",
    database: "php_grupal"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM usuario;", function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  });


//Raiz
router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})

module.exports = router;