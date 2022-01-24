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
//Routes
app.use(require('./routes/index'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Obtener todos los usurios
app.get("/user", (req,res)=> getAllUsers(req,res,con))

//Obtener los usurios filtrados
app.get("/id_usuario", (req,res)=>{
    getUserById(req,res,con)
});

//Lista de vehículos filtrando por ID de usuario
app.get("/listaVehiculos", (req,res)=>{
    getVehiclesInfo(req,res,con)
});

//Información de un vehículo filtrando por el ID del vehículo
app.get("/id_matricula", (req,res)=>{
    getVehiclesByPlateId(req,res,con)
});

//Lista de servicios filtrando por un ID de vehículo
app.get("/lista_servicios",(req,res)=>{
    getServiceByVehicleId(req,res,con)
})

//Modificar datos de un usuario
app.post("/editUsuario",(req, res)=>{
    editUser(req,res,con)
})

//Crear un nuevo usuario
app.post("/insertUsu",(req, res)=>{
   createUser(req,res,con)
})
//Eliminar un usuario
app.post("/borrarUsu", (req,res)=>{
    deleteUser(req,res,con)
})
//Modificar un vehiculo
app.post("/modificarVehiculo", (req,res)=>{
    modifyVehicle(req,res,con)
})

//Crear un nuevo vehiculo
app.post("/crearVehiculo",(req, res)=>{
    createVehicle(req,res,con)
})
//Ver lista vehiculo
app.get("/listaVehiculo",(req,res)=>{
  getVehicles(req,res,con)
})
//Ver lista servicios
app.get("/listaServicios",(req,res)=>{
    getServices(req,res,con)
})
//Eliminar un nuevo vehiculo
app.post("/borrarVehiculo", (req,res)=>{
    deleteVehicle(req,res,con)
})
//Modificar un servicio
app.post("/modificarServicios",(req,res)=>{
    modifyService(req,res,con)
})
//Crear un nuevo servicio
app.post("/crearServicio",(req, res)=>{
    createService(req,res,con)
})
//Eliminar un servicio
app.post("/borrarServicio", (req,res)=>{
    deleteService(req,res,con);
})
//Informacion de un usuario y su lista de vehiculos en la misma llamada filtrando por id usuario
app.post("/infoUsuVehiculo", (req,res)=>{
    getUserAndTheirVehicle(req,res,con)
})
//Informacion de un vehiculo y su lista de servicios en la misma llamada filtrando por id usuario
app.post("/infoVehiculoServicio", (req,res)=>{
    getVehicleAndService(req,res,con)
})
//Conectar base de datos Juanfran http://10.192.240.25:8080/phpmyadmin
