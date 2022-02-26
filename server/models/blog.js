const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    blogTitle: String,
    blogAuthor: String,
    blogContent: String,
    
});

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;
