const { Router } = require("express");
const userRouters = require("./user.routes")
const noteRouters = require("./note.routes")
const tagRouters = require("./tag.routes")
const sessionsRouters = require("./sessions.routes")

const routes = Router()

routes.use("/users", userRouters)
routes.use("/sessions", sessionsRouters)
routes.use("/notes", noteRouters)
routes.use("/tags", tagRouters)

module.exports = routes;