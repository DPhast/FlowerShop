// components/BlogCard.js
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ blog }) {
    const formattedDate = new Date(blog.date).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const href = blog.slug ? `/blogs/${blog.slug}` : "#";

    return (
        <article className={styles.card}>
            <Link href={href} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={`/${blog.image}`}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.image}
                    />
                </div>
            </Link>

            <div className={styles.content}>
                <p className={styles.date}>{formattedDate}</p>

                <Link href={href} className={styles.titleLink}>
                    <h3 className={styles.title}>{blog.title}</h3>
                </Link>

                <p className={styles.excerpt}>{blog.excerpt}</p>

                <Link href={href} className={styles.readMore}>
                    Đọc thêm
                    <i className="fi fi-rr-arrow-small-right"></i>
                </Link>
            </div>
        </article>
    );
}