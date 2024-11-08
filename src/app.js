const express = require("express");
const app = express();
const showRouter = require("../routes/ShowRoute")
const userRouter = require("../routes/UserRoute");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRouter);
app.use("/show", showRouter)

module.exports = app
