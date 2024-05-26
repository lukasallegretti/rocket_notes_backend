const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const TagsController = require("../controllers/TagsController");

const tagssRouters = Router()
const tagsController = new TagsController()

tagssRouters.get('/', ensureAuthenticated, tagsController.index)

module.exports = tagssRouters;