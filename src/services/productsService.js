import fetcher from "@/lib/fetcher";

export async function getProducts() {
    try {
        const { products } = await fetcher("Products");
        return products;
    } catch (error) {
        console.log(error);
    }
}