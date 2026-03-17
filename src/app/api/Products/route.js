import dbConnect from "@/lib/mongodb";
import Products from "@/models/Products";

export async function GET() {
    try {
        await dbConnect();
        const products = await Products.find({});
        return Response.json({ products }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}