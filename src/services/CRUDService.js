const connection = require('../config/database')
const getAllUsers = async () => {
  let [result, fields] = await connection.query("select * from Users");
  return result;
};

const getUserById = async(userId) => {
  const [result, fields] = await connection.execute(
    `select * from Users u WHERE id = ?`,
    [userId]
  );

  const user = result && result.length > 0 ? result[0] : {};
  return user;
}

const updateUserById = async(email, city, name, userID) => {
  const [result, fields] = await connection.query(
    `UPDATE Users
    SET email = ?, city= ?, name = ? 
    WHERE id = ?
    `, [email, city, name, userID]
  );
}

module.exports = {
  getAllUsers, getUserById, updateUserById
};
