const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM user');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await db.query('SELECT * FROM user WHERE ID_User = ?', [id]);
    return rows[0]; // return ผู้ใช้คนเดียว
};

exports.create = async ({ ID_User, Name, Email, Password }) => {
    return await db.query(
        'INSERT INTO user (ID_User, Name, Email, Password) VALUES (?, ?, ?, ?)',
        [ID_User, Name, Email, Password]
    );
};

exports.update = async (id, { Name, Email, Password }) => {
    return await db.query(
        'UPDATE user SET Name = ?, Email = ?, Password = ? WHERE ID_User = ?',
        [Name, Email, Password, id]
    );
};

exports.delete = async (id) => {
    return await db.query('DELETE FROM user WHERE ID_User = ?', [id]);
};
