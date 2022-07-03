const crypto = require("crypto");
const users = [
  {
    id: "1",
    nama: "Testing",
    pass: "password",
  },
  {
    id: "1",
    nama: "Testing2",
    pass: "password2",
  },
];

function findUser(data) {
  var userfound = users.find((user) => user.nama === data);
  if (typeof userfound == "undefined") {
    return (userfound = null);
  } else {
    return userfound;
  }
}

const getUsers = (req, res) => {
  return res.send(users);
};

const createUsers = (req, res) => {
  const newUser = {};
  const id = crypto.randomBytes(6).toString("hex");
  console.log(newUser);
  newUser.id = id;
  newUser.nama = req.body.nama;
  newUser.pass = req.body.pass;
  users.unshift(newUser);
  return res.json(users);
};

const loginUsers = (req, res) => {
  const userfound = findUser(req.body.nama);
  console.log(userfound);
  
  if (userfound != null && userfound.pass === req.body.pass) {
    return res.send("Login Successful");
  } else {
    return res.send("Your username or password may be incorrect");
  }
};

const readUsers = (req, res) => {
  return res.send(findUser(req.params.userId));
};

const updateUsers = (req, res) => {
  console.log(req.params);
  const userfound = findUser(req.params.userId);
  console.log(userfound);
  if (userfound != null) {
    userfound.nama = req.body.nama;
    userfound.pass = req.body.pass;
  }
  return res.send(userfound);
};

const deleteUsers = (req, res) => {
  console.log(req.params);
  const userfound = findUser(req.params.userId);
  console.log(userfound);
  if (userfound != null) {
    const removeIndex = users.findIndex((user) => user.nama === userfound.nama);
    users.splice(removeIndex, 1);
  }
  return res.send(userfound);
};

module.exports = {
  getUsers,
  createUsers,
  loginUsers,
  readUsers,
  updateUsers,
  deleteUsers,
};
