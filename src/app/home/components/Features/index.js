"use client"

import styles from "./Features.module.css"
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const FEATURES = [
    {
        icon : <i className="fi fi-rs-shipping-fast"></i>,
        title: "Khám phá tất cả",
        description: "Đơn hàng trên 1.000.000 VND",
    },
    {
        icon : <i className="fi fi-rr-money-transfer-coin-arrow"></i>,
        title: "Chính sách đổi trả",
        description: "Trả lại trong vòng 14 ngày",
    },
    {
        icon : <i className="fi fi-rr-user-headset"></i>,
        title: "24/7 Dịch vụ hỗ trợ",
        description: "Hỗ trợ cho bạn mọi lúc",
    },
    {
        icon : <i className="fi fi-rr-credit-card"></i>,
        title: "Thanh toán an toàn",
        description: "100% an toàn và nhanh chóng",
    }
];

export default function Features () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const canPrev = currentIndex > 0;
    const canNext = currentIndex < FEATURES.length - 1;

    const handlePrev = () => {
        if (!canPrev) return;
        setCurrentIndex((i) => Math.max(0, i - 1));
    }
    
    const handleNext = () => {
        if (!canNext) return;
        setCurrentIndex((i) => Math.min(FEATURES.length - 1, i + 1));
    }

    return (
        <section className={styles.Features}>
            <div className={styles.containerFluid}>
                <div className={styles.desktopRow}>
                    {FEATURES.map((feature, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.FeatureIcon}>
                                {feature.icon}
                            </div>
                            <div className={styles.FeaturesInfo}>
                                <h3 className={styles.title}>
                                    {feature.title}
                                </h3>
                                <p className={styles.description}>
                                    {feature.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.mobileRow}>
                    <div 
                        className={clsx(styles.btnPrev, !canPrev && styles.disabled)}
                        onClick={handlePrev}
                    >
                        <i className="fi fi-rr-angle-small-left"></i>
                    </div>

                    <div className={styles.wrap}>
                        {FEATURES.map((feature, index) => (
                            <div 
                                key={index}
                                className={clsx(styles.slide, {
                                    [styles.active]: index === currentIndex
                                })}
                                style={{ display: index === currentIndex ? 'flex' : 'none' }}
                            >
                                <div className={styles.FeatureIcon}>
                                    {feature.icon}
                                </div>
                                <div className={styles.FeaturesInfo}>
                                    <h3 className={styles.title}>
                                        {feature.title}
                                    </h3>
                                    <p className={styles.description}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div 
                        className={clsx(styles.btnNext, !canNext && styles.disabled)}
                        onClick={handleNext}
                    >
                        <i className="fi fi-rr-angle-small-right"></i>
                    </div>

                    <div className={styles.dots}>
                        {FEATURES.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={clsx(styles.dot, {
                                    [styles.dotActive]: index === currentIndex
                                })}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>    
            </div>
        </section>
    )
}