// components/DecorService.js
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./DecorService.module.css";

export default function DecorService() {
    return (
        <section className={styles.decorService}>
            <div className="containerFluid">
                <div className={styles.row}>

                    <div className={styles.decorImg}>
                        <Image 
                            src="/images/decor-service-img.jpg"
                            alt="Dịch vụ trang trí hoa"
                            width={600}
                            height={400}
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.decorText}>
                        <div className={styles.heading}>
                            <Image 
                                src="/images/logo.webp"
                                alt="Logo"
                                width={40}
                                height={40}
                                className={styles.icon}
                            />
                            <h3 className={styles.subtitle}>Tại Sao Nên Chọn Chúng Tôi</h3>
                        </div>
                        
                        <h2 className={styles.title}>Dịch vụ trang trí</h2>
                        
                        <p className={styles.description}>
                            Chúng tôi cung cấp dịch vụ trang trí sự kiện với các loại hoa tươi đẹp 
                            và phong cách trang trí độc đáo. Hãy để chúng tôi biến không gian của 
                            bạn thành một thiên đường hoa tươi, tạo nên những kỷ niệm đáng nhớ 
                            cho sự kiện của bạn.
                        </p>
                        
                        <Link href="/about" className={styles.button}>
                            Tìm hiểu thêm
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}