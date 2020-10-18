const express = require("express");
const blogController = require("../controller/blogController");



const router = express.Router();

router.get("/", blogController.getAllBlogs);
router.post("/", blogController.postNewBlog);
router.get("/create", blogController.createNewBlogPage);
router.get("/:id", blogController.getBlogById);
router.delete("/:id", blogController.deleteBlogById);

module.exports = router;
