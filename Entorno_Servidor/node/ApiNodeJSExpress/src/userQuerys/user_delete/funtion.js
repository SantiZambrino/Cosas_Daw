function deleteUser(req,res,con) {
    const id_usu = req.body.id_usu;
    const sql =`delete from lista_usuario where id_usuario = ${id_usu}`;
    console.log(sql);
    con.query(sql, (err,result)=>{
        if(err) throw res.json({estado: 'FATAL ERROR', descripcion:"NO SE HA BORRADO NADA"})
        res.json({estado: 'TODO BIEN', descripcion:'EL REGISTRO SE HA BORRADO'});
    })
}