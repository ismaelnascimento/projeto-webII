const express = require("express");
const router = express.Router();
const { Comments, Users } = require("../models");
const checkAuth = require("../middleware/auth");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: { PostId: postId },
    include: [
      {
        model: Users,
        attributes: ["username"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  res.json(comments);
});

router.post("/", checkAuth, async (req, res) => {
  const comment = {
    ...req.body,
    UserId: req.session.user.id,
    User: { ...req.session.user, password: null },
  };

  const newComment = await Comments.create(comment);

  res.json({
    id: newComment?.dataValues?.id,
    User: { ...req.session.user, password: null },
    ...newComment?.dataValues,
  });
});

module.exports = router;
