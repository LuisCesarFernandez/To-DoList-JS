const mysql = require("mysql2");
const config = require("../config");

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
};

let conexion;

const conxionDB = () => {
  conexion = mysql.createConnection(dbconfig);

  conexion.connect((err) => {
    if (err) {
      console.log("Ocurrió un error", err), setTimeout(conxionDB, 2000);
    } else {
      console.log("Conexion exitosa");
    }
  });

  /* conexion.on('error', err => {
        console.log('[db err]',err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conxionDB;
        }else{
            throw err;
        }
    }) */
};

conxionDB();

const getAll = (table) => {
  return new Promise(function(resolve, reject){
    conexion.query(`SELECT * FROM ??`, [table], (error, result) => {
        if(error) return reject(error);
        resolve(result);
    });
  });
};

const getID = (table, id) => {
    return new Promise(function(resolve, reject){
        conexion.query(`SELECT * FROM ?? WHERE id=?`, [table, id], (error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    })
};

const post = (table, data) => {
    return new Promise(function(resolve, reject){
        conexion.query(`INSERT INTO ?? SET ?`, [table, data], (error, result) => {
            if(error) return reject(error);
            resolve(result);
        })
    })
};

const put = (table, data, id) => {
  return new Promise((resolve,reject) => {
    conexion.query(`UPDATE ?? SET ? WHERE id=?`, [table,data, id], (error, result) => {
      if(error) return reject(error);
      resolve(result)
    })
  })
};

const remove = (table, id) => {
  return new Promise((resolve, reject) => {
    conexion.query(`DELETE FROM ?? WHERE id=?`,[table, id],(error, result) => {
      if(error) return reject(error);
      resolve(result)
    })
  })
};

module.exports = {
  getAll,
  getID,
  post,
  put,
  remove,
};
