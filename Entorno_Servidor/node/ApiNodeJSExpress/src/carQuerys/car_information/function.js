function getVehiclesInfo(req, res, con) {
    const id_usuario = req.query.id;
    let sql = `SELECT * FROM lista_vehiculos where id_usuario = ${id_usuario}`;
    con.query(sql, (err, result) => {
        if (err) throw err
        res.send(result);
    })
}
exports.getVehiclesInfo = getVehiclesInfo;
function getVehiclesByPlateId(req, res, con) {
    const id_matricula = req.query.id;
    let sql = `SELECT * FROM lista_vehiculos where id_matricula = ${id_matricula}`;
    con.query(sql, (err, result) => {
        if (err) throw err
        res.send(result);
    })
}
exports.getVehiclesByPlateId = getVehiclesByPlateId;
function getVehicles(req, res, con) {
    const name = req.query.name;
    const sql = "select * from lista_vehiculos"
    con.query(sql, (err, result) => {
        if (err) throw err
        res.send(result);
    })
}
exports.getVehicles = getVehicles;
function getVehicleAndService(req,res,con) {
    const id_usuario = req.body.id_usuario;

    const sql = `select * from lista_vehiculos where id_usuario = '${id_usuario}'`;



    con.query(sql, (err, result) => {
        if (err) throw err
        const sqlServicio = `select * from lista_servicios where id_matricula = '${result[0].id_matricula}'`;
        con.query(sqlServicio, (err, resultServicio) => {
            if (err) throw err
            console.log(result[0].id_matricula)
            const objeto = {
                matricula: result[1].matricula,
                marca: result[1].marca,
                modelo: result[1].modelo,
                año: result[1].año,
                servicios: resultServicio
            }
            res.send(objeto);
        })
    })
}
exports.getVehicleAndService = getVehicleAndService;