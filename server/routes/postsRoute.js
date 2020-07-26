const app = require("express");
const router = app.Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getAllPosts);

router.get("/:id", postsController.getPost);

module.exports = router;
