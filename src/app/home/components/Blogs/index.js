// components/Blogs.js
"use client"

import styles from "./Blogs.module.css";
import { BlogCard } from "@/components";

export default function Blogs({ data }) {
    const sorted = [...(data || [])].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    const latest = sorted.slice(0, 3);

    return (
        <section className={styles.Blogs}>
            <h2 className={styles.title}>Bài viết mới nhất</h2>
            <div className={styles.blogGrid}>
                {latest.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        </section>
    );
}