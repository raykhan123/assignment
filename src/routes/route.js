const express = require('express');
const router = express.Router();
const blogController = require("../controller/blogController")



router.post("/blogs", blogController.createBlog)  

router.get('/getblogs', blogController.getBlog)

router.get('/getblogs/:POSTID', blogController.getBlogWithId)

router.put('/getblogs/:POSTID', blogController.updateBlog)

module.exports = router;