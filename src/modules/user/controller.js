const db = require('../../db/mysql')

const TABLE = 'task'

const get_All = () => {
    return db.getAll(TABLE);
}

const get_AllId = (ID) => {
    return db.getID(TABLE, ID);
}

const postData = (DATA) => {
    return db.post(TABLE,DATA);
}

const putData = (DATA, ID) => {
    return db.put(TABLE, DATA, ID);
}

const removeData = (ID) => {
    return db.remove(TABLE, ID)
}

module.exports = {
    get_All,
    get_AllId,
    postData,
    putData,
    removeData,
}