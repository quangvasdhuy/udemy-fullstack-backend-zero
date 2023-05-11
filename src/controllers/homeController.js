const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  return res.render("home.ejs", { listUsers: result });
};

const getABC = (req, res) => {
  res.send("ABC");
};

const hoidanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  const [result, fields] = await connection.execute(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  console.log("result:", result);

  res.send("Created Success");

  //   const [rows, fields] = await connection.execute("select * from Users u");
  //   console.log(rows);
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  hoidanIT,
  postCreateUser,
  getCreatePage,
};
