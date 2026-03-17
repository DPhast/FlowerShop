import Link from "next/link";
import { getBlogs } from "@/services";
import { BlogCard } from "@/components";
import styles from "./blogs.module.css";

export default async function BlogsPage() {
    const blogs = (await getBlogs()) ?? [];
    const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <main className={styles.page}>
            <section className={styles.breadcrumbSection}>
                <div className={styles.breadcrumbOverlay} />
                <div className={styles.breadcrumbInner}>
                    <h1 className={styles.breadcrumbTitle}>Blogs</h1>
                    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                        <Link className={styles.breadcrumbLink} href="/">
                            Trang chủ
                        </Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent} aria-current="page">
                            Blogs
                        </span>
                    </nav>
                </div>
            </section>

            <header className={styles.header}>
                <h2 className={styles.title}>Bài viết mới nhất</h2>
                <p className={styles.subtitle}>{sorted.length} bài viết</p>
            </header>

            {sorted.length === 0 ? (
                <section className={styles.emptyState}>
                    Chưa có bài viết nào.
                </section>
            ) : (
                <section className={styles.grid}>
                    {sorted.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </section>
            )}
        </main>
    );
}