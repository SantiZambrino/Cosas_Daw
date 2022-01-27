const { application } = require('express');
const express = require('express');
const app = express();
const morgan=require('morgan');
const userInfo = require("./userQuerys/user _information/functions")
const userEdit = require('./userQuerys/user_modificationAndCreation/function');
const carInfo = require('./carQuerys/car_information/function');
const carEdit = require('./carQuerys/car_modification/function');
const serviceInfo = require('./serviceQuerys/seviceInformation/function');
const serviceEdit= require('./serviceQuerys/serviceEdit/function');
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');

// const app = express();
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

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
//Routes
app.use(require('./routes/index'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});


/*
 ***********************************
 CONSULTAS USUARIOS
 ***********************************
*/
// ++++++++++++++++++++++++++INFORMACION+++++++++++++++++++++++++++++++++++++
//Obtener todos los usurios
app.get("/user", (req,res)=>userInfo.getAllUsers(req,res,con))
//Obtener los usurios filtrados
app.get("/id_usuario", (req,res)=>{
    userInfo.getUserById(req,res,con)
});
//Informacion de un usuario y su lista de vehiculos en la misma llamada filtrando por id usuario
app.post("/infoUsuVehiculo", (req,res)=>{
    userInfo.getUserAndTheirVehicle(req,res,con)
})
// ++++++++++++++++++++++++++CAMBIO DATOS+++++++++++++++++++++++++++++++++++++
//Modificar datos de un usuario
app.post("/editUsuario",(req, res)=>{
    userEdit.editUser(req,res,con)
})

//Crear un nuevo usuario
app.post("/insertUsu",(req, res)=>{
    userEdit.createUser(req,res,con)
 })
 //Eliminar un usuario
app.post("/borrarUsu", (req,res)=>{
    userEdit.deleteUser(req,res,con)
})
/*
 ***********************************
 CONSULTAS VEHICULOS
 ***********************************
*/
// ++++++++++++++++++++++++++INFORMACION+++++++++++++++++++++++++++++++++++++
//Lista de vehículos filtrando por ID de usuario
app.get("/listaVehiculos", (req,res)=>{
    carInfo.getVehiclesInfo(req,res,con)
});

//Información de un vehículo filtrando por el ID del vehículo
app.get("/id_matricula", (req,res)=>{
    carInfo.getVehiclesByPlateId(req,res,con)
});
//Informacion de un vehiculo y su lista de servicios en la misma llamada filtrando por id usuario
app.post("/infoVehiculoServicio", (req,res)=>{
    carInfo.getVehicleAndService(req,res,con)
})
//Ver lista vehiculo
app.get("/listaVehiculo",(req,res)=>{
    carInfo.getVehicles(req,res,con)
  })

// ++++++++++++++++++++++++++CAMBIO DATOS+++++++++++++++++++++++++++++++++++++
//Modificar un vehiculo
app.post("/modificarVehiculo", (req,res)=>{
    carEdit.modifyVehicle(req,res,con)
})
//Crear un nuevo vehiculo
app.post("/crearVehiculo",(req, res)=>{
    carEdit.createVehicle(req,res,con)
})
//Eliminar un nuevo vehiculo
app.post("/borrarVehiculo", (req,res)=>{
    carEdit.deleteVehicle(req,res,con)
})

/*
 ***********************************
 CONSULTAS SERVICIOS
 ***********************************
*/
// ++++++++++++++++++++++++++INFORMACION+++++++++++++++++++++++++++++++++++++
//Lista de servicios filtrando por un ID de vehículo
app.get("/lista_servicios",(req,res)=>{
    serviceInfo.getServiceByVehicleId(req,res,con)
})

//Ver lista servicios
app.get("/listaServicios",(req,res)=>{
    serviceInfo.getServices(req,res,con)
})
// ++++++++++++++++++++++++++CAMBIO DATOS+++++++++++++++++++++++++++++++++++++
//Modificar un servicio
app.post("/modificarServicios",(req,res)=>{
    serviceEdit.modifyService(req,res,con)
})
//Crear un nuevo servicio
app.post("/crearServicio",(req, res)=>{
    serviceEdit.createService(req,res,con)
})
//Eliminar un servicio
app.post("/borrarServicio", (req,res)=>{
    serviceEdit.deleteService(req,res,con);
})


//Conectar base de datos Juanfran http://10.192.240.25:8080/phpmyadmin
