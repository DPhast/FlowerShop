import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },

    title: { type: String, required: true },

    content: { type: String, required: true },

    customer: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Review =
  mongoose.models.Reviews || mongoose.model("Reviews", ReviewSchema, "reviews");

export default Review;