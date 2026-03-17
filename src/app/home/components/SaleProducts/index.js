// components/SaleProducts.js
"use client"

import { useState, useEffect } from "react";
import clsx from "clsx";
import { ProductCard } from "@/components";
import styles from "./SaleProducts.module.css";

const VISIBLE_ITEMS = 4;

export default function SaleProducts({ data }) {
    const saleProducts = data?.filter(product => 
        product.isSale === true || (product.discount && product.discount > 0)
    ) || [];
    
    const [startIndex, setStartIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countDownDate = new Date("November 30, 2026 23:59:59").getTime();

        const timer = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        timer();
        const intervalId = setInterval(timer, 1000);

        return () => clearInterval(intervalId);
    }, []);
    
    const maxStartIndex = Math.max(0, saleProducts.length - VISIBLE_ITEMS);
    const canPrev = startIndex > 0;
    const canNext = startIndex < maxStartIndex;

    const handlePrev = () => {
        if (!canPrev) return;
        setStartIndex(prev => prev - 1);
    };

    const handleNext = () => {
        if (!canNext) return;
        setStartIndex(prev => prev + 1);
    };

    if (saleProducts.length === 0) {
        return null;
    }

    const visibleProducts = saleProducts.slice(startIndex, startIndex + VISIBLE_ITEMS);

    return (
        <section className={styles.SaleProducts}>
            <div className={styles.container}>
                {/* Header với timer */}
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.SaleTitle}>Flash Sale</h2>
                        <span className={styles.subtitle}>Sản phẩm giảm giá sốc</span>
                    </div>
                    
                    {/* Countdown Timer */}
                    <div className={styles.timer}>
                        <div className={styles.timerItem}>
                            <span className={styles.timerNumber}>{timeLeft.days}</span>
                            <span className={styles.timerLabel}>Ngày</span>
                        </div>
                        <div className={styles.timerSeparator}>:</div>
                        <div className={styles.timerItem}>
                            <span className={styles.timerNumber}>{timeLeft.hours}</span>
                            <span className={styles.timerLabel}>Giờ</span>
                        </div>
                        <div className={styles.timerSeparator}>:</div>
                        <div className={styles.timerItem}>
                            <span className={styles.timerNumber}>{timeLeft.minutes}</span>
                            <span className={styles.timerLabel}>Phút</span>
                        </div>
                        <div className={styles.timerSeparator}>:</div>
                        <div className={styles.timerItem}>
                            <span className={styles.timerNumber}>{timeLeft.seconds}</span>
                            <span className={styles.timerLabel}>Giây</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.wrapper}>
                    <button 
                        className={clsx(styles.navButton, styles.prevButton, !canPrev && styles.disabled)}
                        onClick={handlePrev}
                        disabled={!canPrev}
                        aria-label="Previous products"
                    >
                        <i className="fi fi-rr-angle-small-left"></i>
                    </button>

                    <div className={styles.productsGrid}>
                        {visibleProducts.map((product, index) => (
                            <ProductCard 
                                key={product._id || product.slug || index}
                                product={product}
                                variant="sale"
                            />
                        ))}
                    </div>

                    <button 
                        className={clsx(styles.navButton, styles.nextButton, !canNext && styles.disabled)}
                        onClick={handleNext}
                        disabled={!canNext}
                        aria-label="Next products"
                    >
                        <i className="fi fi-rr-angle-small-right"></i>
                    </button>
                </div>

                <div className={styles.positionInfo}>
                    Hiển thị {startIndex + 1} - {Math.min(startIndex + VISIBLE_ITEMS, saleProducts.length)} / {saleProducts.length} sản phẩm
                </div>
            </div>
        </section>
    );
}