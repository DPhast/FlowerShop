import Link from "next/link";
import { getProducts } from "@/services";
import { ProductCard } from "@/components";
import styles from "./products-grid.module.css";

export default async function ProductsGridPage() {
    const products = (await getProducts()) ?? [];

    const totalItems = products.length;

    return (
        <main className={styles.page}>
            <section className={styles.breadcrumbSection}>
                <div className={styles.breadcrumbOverlay} />
                <div className={styles.breadcrumbInner}>
                    <h1 className={styles.breadcrumbTitle}>Tất cả sản phẩm</h1>
                    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                        <Link className={styles.breadcrumbLink} href="/">
                            Trang chủ
                        </Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent} aria-current="page">
                            Sản phẩm
                        </span>
                    </nav>
                </div>
            </section>

            <header className={styles.header}>
                <h1 className={styles.title}>Tất cả sản phẩm</h1>
                <p className={styles.headerHint}>{totalItems} sản phẩm</p>
            </header>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Danh mục sản phẩm</h2>

                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarHeading}>Nổi bật</h3>
                        <div className={styles.sidebarLinks}>
                            <Link href="/products-grid" className={styles.sidebarLink}>
                                Tất Cả Sản Phẩm
                            </Link>
                            <Link href="/products-grid?feature=sale" className={styles.sidebarLink}>
                                Sản Phẩm Giảm Giá
                            </Link>
                            <Link href="/products-grid?feature=trending" className={styles.sidebarLink}>
                                Sản Phẩm Thịnh Hành
                            </Link>
                            <Link href="/products-grid?feature=new" className={styles.sidebarLink}>
                                Sản Phẩm Mới
                            </Link>
                        </div>
                    </div>

                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarHeading}>Loại Hoa</h3>
                        <div className={styles.sidebarLinks}>
                            <Link href="/products-grid?type=hoa-hong" className={styles.sidebarLink}>
                                Hoa Hồng
                            </Link>
                            <Link href="/products-grid?type=hoa-cuc" className={styles.sidebarLink}>
                                Hoa Cúc
                            </Link>
                            <Link href="/products-grid?type=hoa-huong-duong" className={styles.sidebarLink}>
                                Hoa Hướng Dương
                            </Link>
                            <Link href="/products-grid?type=hoa-baby" className={styles.sidebarLink}>
                                Hoa Baby
                            </Link>
                            <Link href="/products-grid?type=hoa-lavender" className={styles.sidebarLink}>
                                Hoa Lavender
                            </Link>
                            <Link href="/products-grid?type=hoa-cam-tu-cau" className={styles.sidebarLink}>
                                Hoa Cẩm Tú Cầu
                            </Link>
                        </div>
                    </div>

                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarHeading}>Khoảng Giá</h3>
                        <div className={styles.sidebarLinks}>
                            <Link href="/products-grid?price=0-100" className={styles.sidebarLink}>
                                0đ - 100.000đ
                            </Link>
                            <Link href="/products-grid?price=100-200" className={styles.sidebarLink}>
                                100.000đ - 200.000đ
                            </Link>
                            <Link href="/products-grid?price=200-500" className={styles.sidebarLink}>
                                200.000đ - 500.000đ
                            </Link>
                            <Link href="/products-grid?price=500" className={styles.sidebarLink}>
                                Trên 500.000đ
                            </Link>
                        </div>
                    </div>

                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarHeading}>Đánh Giá</h3>
                        <div className={styles.sidebarLinks}>
                            <Link href="/products-grid?rating=5" className={styles.sidebarLink}>
                                5 sao
                            </Link>
                            <Link href="/products-grid?rating=4" className={styles.sidebarLink}>
                                Từ 4 sao
                            </Link>
                        </div>
                    </div>
                </aside>

                <section className={styles.content}>
                    {products.length > 0 ? (
                        <div className={styles.grid}>
                            {products.map((product, index) => (
                                <ProductCard
                                    key={product?._id ?? `product-${index}`}
                                    product={product}
                                    variant="default"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Không có sản phẩm nào</p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}