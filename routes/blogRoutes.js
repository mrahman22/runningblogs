const express = require("express");
const {
  getAllBlogs,
  postNewBlog,
  createNewBlogPage,
  getBlogById,
  deleteBlogById,
} = require("../controller/controller");



const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", postNewBlog);
router.get("/create", createNewBlogPage);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);

module.exports = router;
