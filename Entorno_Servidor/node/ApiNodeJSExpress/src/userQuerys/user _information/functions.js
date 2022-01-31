
function getAllUsers(req,res,con) {
    const name = req.query.name;
    let sql = `SELECT * FROM lista_usuario`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        console.log({result})
        res.send(result);
    })
}
exports.getAllUsers = getAllUsers;

function getUserById(req,res,con) {
    const id = req.query.id;
    console.log({id})
    let sql = `SELECT * FROM lista_usuario where id_usuario = '${id}'`;
    con.query(sql, (err,result)=>{
        if(err) throw err
        console.log({result})
        res.send(result);
    })
}
exports.getUserById = getUserById;

function getUserAndTheirVehicle(req,res,con) {
    const id_usuario = req.body.id_usuario;

    const sql= `select * from lista_usuario where id_usuario = '${id_usuario}'`;
    const sqlVehiculo= `select * from lista_vehiculos where id_usuario = '${id_usuario}'`;
 
    
    con.query(sql, (err,result)=>{//Compruebo la primera consulta
        if(err)
        throw err
        // res.send(result); No envio
        //Crear otra query para vehiculos
        con.query(sqlVehiculo, (err,resultVehiculo)=>{
            if(err) throw err
            // res.send(resultVehiculo); No envio 
            const info = {//Cojo toda la informacion 
                nombre:result[0].nombre,
                apellidos:result[0].apellidos,
                dni:result[0].dni,
                telefono:result[0].telefono,
                email:result[0].email,
                vehiculos:resultVehiculo
            }
            res.send(info);//Muestro la información
        })
        // console.log({result});
        // console.log({resultVehiculo});
       
    })
}

exports.getUserAndTheirVehicle = getUserAndTheirVehicle;