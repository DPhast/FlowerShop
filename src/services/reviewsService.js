import fetcher from "@/lib/fetcher";

export async function getReviews() {
    try {
        const { reviews } = await fetcher("Reviews");
        return reviews;
    } catch (error) {
        console.log(error);
    }
}