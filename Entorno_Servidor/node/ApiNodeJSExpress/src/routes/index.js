const { Router, application } = require('express');
const { append } = require('express/lib/response');
const router = Router();

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "10.192.240.25",
//     port: "3307",
//     user: "cuentaSanti",
//     password: "1234",
//     database: "bd_taller"
// });


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("SELECT * FROM lista_usuario;", function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + JSON.stringify(result));
//     });
//   });


//Raiz
router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})

module.exports = router;