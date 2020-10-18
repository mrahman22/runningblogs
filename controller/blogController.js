const Blog = require("../models/blog");

const getAllBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const postNewBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const createNewBlogPage = (req, res) => {
  res.render("create");
};

const getBlogById = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("singleBlog", { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteBlogById = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllBlogs,
  postNewBlog,
  createNewBlogPage,
  getBlogById,
  deleteBlogById
};
