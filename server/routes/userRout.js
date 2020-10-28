let route = require("express").Router();
let { createUser } = require("../../db/user.js");

route.post("/SingUp", (req, res) => {
  // console.log("qweqweqwe");
  let obj = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    age: req.body.age,
  };
  if (
    obj.email === undefined ||
    obj.password === undefined ||
    obj.name === undefined
  ) {
    res.status(301).send();
  } else {
    createUser(obj)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send("error");
      });
  }
});

module.exports = route;
