"use client"

import styles from "./Stats.module.css"
import { useState } from "react";
import clsx from "clsx";

const STATS = [
    { value: "10k", label: "Khách Hàng Thân Thiết" },
    { value: "4.9", label: "Trung Bình Đánh Giá" },
    { value: "167+", label: "Loại Hoa" },
    { value: "13+", label: "Năm Kinh Nghiệm" }
]

export default function Stats() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const canPrev = currentIndex > 0;
    const canNext = currentIndex < STATS.length - 1;

    const handlePrev = () => {
        if (!canPrev) return;
        setCurrentIndex((i) => i - 1);
    }
    
    const handleNext = () => {
        if (!canNext) return;
        setCurrentIndex((i) => i + 1);
    }

    return (
        <section className={styles.Stats}>
            <div className={styles.container}>
                <div className={styles.StatsDesktop}>
                    {STATS.map((item, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.StatsValue}>
                                {item.value}
                            </div>
                            <div className={styles.StatsLabel}>
                                {item.label}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.StatsMobile}>
                    <div 
                        className={clsx(styles.btnPrev, !canPrev && styles.disabled)}
                        onClick={handlePrev}
                    >
                        <i className="fi fi-rr-angle-small-left"></i>
                    </div>

                    <div className={styles.wrap}>
                        <div className={styles.slide}>
                            <div className={styles.StatsValue}>
                                {STATS[currentIndex].value}
                            </div>
                            <div className={styles.StatsLabel}>
                                {STATS[currentIndex].label}
                            </div>
                        </div>
                        
                        <div className={styles.dots}>
                            {STATS.map((_, index) => (
                                <button
                                    key={index}
                                    className={clsx(
                                        styles.dot, 
                                        index === currentIndex && styles.activeDot
                                    )}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to stat ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div 
                        className={clsx(styles.btnNext, !canNext && styles.disabled)}
                        onClick={handleNext}
                    >
                        <i className="fi fi-rr-angle-small-right"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}