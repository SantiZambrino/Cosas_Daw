function createService(res,req,con) {
    const{tipo_servicio, descripcion,id_matricula} = req.body;
    
    const sql = ` insert into lista_servicios(tipo_servicio,descripcion,id_matricula) values('${tipo_servicio}','${descripcion}','${id_matricula}')`;

    con.query(sql, (err,result)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"CAMPO MODIFICADO INCORRECTAMENTE"})
        res.json({estado:'ok', descripcion:'REGISTROS INCERTADOS CORRECTAMENTE', id: result.insertId});
    })
}
exports.createService = createService;
function deleteService(req,res,con) {
    const id_servicio = req.body.id_servicio;
    const sql =`delete from lista_servicios where id_servicio = ${id_servicio}`;
    
    con.query(sql, (err)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"NO SE HA BORRADO NADA"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA BORRADO'});
    })
}
exports.deleteService = deleteService;
function modifyService(req,res,con) {
    const{servicio,descripcion,id_servicio} = req.body;

    const sql = `update lista_servicios set tipo_servicio = '${servicio}', descripcion  ='${descripcion}' where id_servicio = '${id_servicio}'`;

    con.query(sql, (err)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"CAMPO MODIFICADO INCORRECTAMENTE"})
 	    res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA ACTUALIZADO'});
    })
}
exports.modifyService = modifyService;