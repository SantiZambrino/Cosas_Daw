function createUser(req, res, con) {
    const name = req.body.name;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const pass = req.body.pass;
    const id_admin = req.body.id_admin;


    const sql = ` insert into lista_usuario(nombre,apellidos,dni,telefono,email,contrasena,id_admin) values('${name}','${apellido}','${dni}',${telefono},'${email}','${pass}',${id_admin})`
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) throw res.json({ estado: 'FATAL ERROR', descripcion: "CAMPO MODIFICADO INCORRECTAMENTE" })
        res.json({ estado: 'ok', descripcion: 'REGISTROS INCERTADOS CORRECTAMENTE', id: result.insertId });
    })
}
exports.createUser = createUser;
function editUser(req,res,con) {
    const dni = req.body.dni
    const name = req.body.nombre;
    const apellido = req.body.apellidos;
    
    const sql = `update from lista_usuarios set nombre = ${name}, apellidos = ${apellido}, dni = ${dni};` 
    con.query(sql, (err)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"CAMPO MODIFICADO INCORRECTAMENTE"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA ACTUALIZADO'});
    })
}
exports.editUser = createUser;
function deleteUser(req,res,con) {
    const id_usu = req.body.id_usu;
    const sql =`delete from lista_usuario where id_usuario = ${id_usu}`;
    console.log(sql);
    con.query(sql, (err,result)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"NO SE HA BORRADO NADA"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA BORRADO'});
    })
}
exports.deleteUser = deleteUser;