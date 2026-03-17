import { getHeroes, getProducts, getBlogs, getReviews } from "@/services";
import {
    Hero,
    Features,
    Collections,
    TrendingProducts,
    DecorService,
    SaleProducts,
    BrandBanner,
    Stats,
    Reviews,
    Blogs,
    Newsletter
} from "./home/components";

export const dynamic = "force-dynamic";

export default async function Home() {
  const heroes = await getHeroes();
  const products = await getProducts();
  const reviews = await getReviews();
  const blogs = await getBlogs();

  return (
    <>
        <Hero data={heroes} />
        <Features />
        <Collections />
        <TrendingProducts data={products} />
        <DecorService />
        <SaleProducts data={products} />
        <BrandBanner />
        <Stats />
        <Reviews data={reviews} />
        <Blogs data={blogs} />
        <Newsletter />
    </>
  );
}
