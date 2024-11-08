const { Router } = require("express")
const showRouter = Router()
const { User, Show } = require("../models/index")
const { check, validationResult } = require("express-validator");

showRouter.get("/", async (req, res) => {
    const show = await Show.findAll()
    res.json(show)
})

showRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    const show = await Show.findByPk(id)
    res.json(show)
})

showRouter.get("/:id/users", async (req, res) => {
    const id = req.params.id
    const show = await Show.findByPk(id)
    const watchedShows = await show.getUsers()
    res.json(watchedShows)
})

showRouter.put("/:showid/available", async (req, res) => {
    const { showid } = req.params
    const { available } = req.body
    const show =  await Show.findByPk(showid)
    show.available = available
    await show.save()
    res.json(show)
})

showRouter.delete("/:showid" , async (req, res) => {
    const { showid } = req.params 

    const show = ShowfindByPk(showid)

})



module.exports = showRouter