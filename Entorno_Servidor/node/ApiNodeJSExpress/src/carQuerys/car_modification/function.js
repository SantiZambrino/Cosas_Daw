function modifyVehicle(req,res,con) {
    const id_matricula = req.body.id_matricula;
    const marca = req.body.marca;
    const matricula = req.body.matricula;
    const modelo = req.body.modelo;
    const year = req.body.year;

    const sql = `update lista_vehiculos set marca = '${marca}', matricula = '${matricula}', modelo = '${modelo}', año = '${year}' where id_matricula = '${id_matricula}'`;
    
    con.query(sql, (err)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"CAMPO MODIFICADO INCORRECTAMENTE"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA ACTUALIZADO'});
    })
}
exports.modifyVehicle = modifyVehicle;
function createVehicle(req,res,con) {
    const{matricula,marca,modelo,year,id_usuario} = req.body;
    
    const sql = ` insert into lista_vehiculos(matricula,marca,modelo,año,id_usuario) values('${matricula}','${marca}','${modelo}','${year}','${id_usuario}')`

    con.query(sql, (err,result)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"CAMPO MODIFICADO INCORRECTAMENTE"})
        res.json({estado:'ok', descripcion:'REGISTROS INCERTADOS CORRECTAMENTE', id: result.insertId});
    })
}
exports.createVehicle = createVehicle;
function deleteVehicle(req,res,con) {
    const id_usu = req.body.id_usu;
    const sql =`delete from lista_vehiculos where id_usuario = ${id_usu}`;
    
    con.query(sql, (err,result)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"NO SE HA BORRADO NADA"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA BORRADO'});
    })
}
exports.deleteVehicle = deleteVehicle;
