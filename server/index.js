require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();

// Configure CORS with credentials support
app.use(
  cors({
    origin: "http://localhost:3000", // your React app URL
    credentials: true, // Important for cookies/sessions
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  })
);

const db = require("./models");

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

const userRouter = require("./routes/Users");
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
});
