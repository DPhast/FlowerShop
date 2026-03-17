// components/BrandBanner.js
"use client";

import Link from "next/link";
import styles from "./BrandBanner.module.css";

export default function BrandBanner() {
    return (
        <section className={styles.brandBanner}>
            <div className={styles.bannerOverlay}></div>
            
            <div className={styles.bannerContent}>
                <h2 className={styles.bannerTitle}>
                    Tình Yêu Như Một Đóa Hoa 
                    <br /> 
                    Tình Bạn Như Một Cái Cây Che Chở
                </h2>
                <Link href="/about" className={styles.brandButton}>
                    VỀ CHÚNG TÔI
                </Link>
            </div>
        </section>
    );
}