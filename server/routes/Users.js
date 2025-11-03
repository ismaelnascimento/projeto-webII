const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Users } = require("../models");
const checkAuth = require("../middleware/auth");

router.get("/session", checkAuth, async (req, res) => {
  const user = req.session.user;
  res.json({ ...user, password: null });
});

router.get("/:id", checkAuth, async (req, res) => {
  const id = req.params.id;

  const user = await Users.findByPk(id);

  res.json(user);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username } });

  if (!user) {
    res.status(401).json({ error: "Esse usuário não existe" });
  }

  const passwordValid = await bcrypt.compare(password, user?.password);

  if (user && passwordValid) {
    req.session.user = { ...user?.dataValues, password: null };
    res.status(200).json(user);
  } else {
    res.status(401).json({ error: "Nome de usuário ou senha incorretos" });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username?.length > 0 || !password?.length > 0) {
    return res
      .status(401)
      .json({ error: "Nome de usuário e senha são obrigatórios" });
  }

  const userIfExists = await Users.findOne({ where: { username } });

  if (userIfExists) {
    return res.status(401).json({ error: "Esse nome de usuário já existe" });
  }

  const passwordCript = await bcrypt.hash(password, 10);

  const user = {
    username,
    password: passwordCript,
  };

  const newUser = await Users.create(user);
  req.session.user = { ...newUser?.dataValues, password: null };
  res.status(201).json({ ...newUser?.dataValues, password: null });
});

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.status(200).json("Logout feito com sucesso");
});

module.exports = router;
