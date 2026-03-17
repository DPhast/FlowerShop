import dbConnect from "@/lib/mongodb";
import Review from "@/models/Reviews";

export async function GET() {
    try {
        await dbConnect();
        const reviews = await Review.find({});
        return Response.json({ reviews }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}