"use client"

import styles from "./Collections.module.css"
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Collections () {
    return (
        <section className={styles.Collections}>
            <div className={styles.container}>
                <div className={styles.CollList}>

                    <div className={styles.ListItem}>
                        <div className={styles.ItemWrap}>
                        </div>
                        <div className={styles.ItemInfo}>
                            <span className={styles.ItemSpan}>Bộ sưu tập</span>
                            <h2 className={styles.ItemTitle}>Hoa mới</h2>
                            <Link href="/products-grid" className={styles.ItemBtn}>Mua ngay</Link>
                        </div>
                    </div>

                    <div className={styles.ListItem}>
                        <div className={styles.ItemWrap}>
                        </div>
                        <div className={styles.ItemInfo}>
                            <span className={styles.ItemSpan}>Bộ sưu tập</span>
                            <h2 className={styles.ItemTitle}>Hoa mới</h2>
                            <Link href="/products-grid" className={styles.ItemBtn}>Mua ngay</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}