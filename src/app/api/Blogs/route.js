import dbConnect from "@/lib/mongodb";
import Blogs from "@/models/Blogs";

export async function GET() {
    try {
        await dbConnect();
        const blogs = await Blogs.find({});
        return Response.json({ blogs }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}