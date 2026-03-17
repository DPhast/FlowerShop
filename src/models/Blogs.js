import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    excerpt: { type: String, required: true },

    content: { type: String, required: true },

    image: { type: String, required: true },

    date: { type: Date, required: true },

    url: { type: String, required: true }
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema, "Blogs");

export default Blog;