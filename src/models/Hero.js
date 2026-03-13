import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        image: { type: String, required: true },
        buttonText: { type: String, required: true },
        buttonLink: { type: String, required: true },
    },
    { timestamps: true }
);

const Hero = mongoose.models.hero || mongoose.model("hero", HeroSchema, "heroes");

export default Hero;