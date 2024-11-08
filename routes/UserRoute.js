const { Router } = require("express")
const userRouter = Router()
// const User = require("../models/User")
const { User, Show } = require("../models/index")
const { check, validationResult } = require("express-validator");

userRouter.get("/", async (req, res) => {
    console.log("hello")
    const user = await User.findAll()
    res.json(user)
})

userRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
    res.json(user)
})

userRouter.get("/:id/shows", async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
    const watchedShows = await user.getShows()
    res.json(watchedShows)
})

userRouter.put("/:userid/shows/:showid", async (req, res) => {
    const {userid, showid} = req.params
    const user = await User.findByPk(userid)
    const show =  await Show.findByPk(showid)
    await user.addShow
    res.json({
        message: `User ${userid} is now associated with Show ${showid}`,
        userId: user.id,
        showId: show.id,
        title: show.title,
    });

})



module.exports = userRouter