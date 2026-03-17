import fetcher from "@/lib/fetcher";

export async function getBlogs() {
    try {
        const { blogs } = await fetcher("Blogs");
        return blogs;
    } catch (error) {
        console.log(error);
    }
}
