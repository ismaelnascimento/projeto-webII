const express = require("express");
const router = express.Router();
const { Posts, Users } = require("../models");
const checkAuth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll({
    include: [
      {
        model: Users,
        attributes: ["username"],
      },
    ],
  });
  res.json(listOfPosts);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id, {
    include: [
      {
        model: Users,
        attributes: ["username"],
      },
    ],
  });
  res.json(post);
});

router.post("/", checkAuth, async (req, res) => {
  const post = {
    ...req.body,
    UserId: req.session.user.id,
    User: { ...req.session.user, password: null },
  };

  const newPost = await Posts.create(post);

  res.json({
    id: newPost?.dataValues?.id,
    User: { ...req.session.user, password: null },
    ...newPost?.dataValues,
  });
});

module.exports = router;
