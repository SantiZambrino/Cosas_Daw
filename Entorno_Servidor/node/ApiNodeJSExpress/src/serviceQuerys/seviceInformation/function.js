function getServiceByVehicleId(req,res,con) {
    const matricula = req.query.matricula;
    let sql = `SELECT tipo_servicio FROM lista_servicios where id_matricula = ${matricula}`;
    con.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
}
exports.getServiceByVehicleId = getServiceByVehicleId;
function getServices(req,res,con) {
    const name = req.query.name;
    const sql = "select * from lista_servicios"
    con.query(sql, (err,result)=>{
        if(err) throw err
        res.send(result);
    })
}
exports.getServices = getServices;