"use client"

import styles from "./Reviews.module.css"
import {useState } from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Reviews({ data }) {
    const reviews = data ?? [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const canPrev = currentIndex > 0;
    const canNext = currentIndex < reviews.length - 1;

    const handlePrev = () => {
        if (!canPrev) return;
        setCurrentIndex((i) => Math.max(0, i - 1));
    }
    const handleNext = () => {
        if (!canNext) return;
        setCurrentIndex((i) => Math.min(reviews.length-1, i+1))
    }

    return (
        <section className={styles.Reviews}>
            <div className={styles.WrapImage}>
            <Image 
                src="/images/ctm-rv-img.jpg"
                alt="ReviewImage"
                width={450}
                height={300}
                className={styles.ReviewImage}
            />
            </div>
            <div className={styles.wrapper}>
            <h2 className={styles.ReviewsTitle}>Đánh giá của khách hàng</h2>
            <label className={styles.ReviewsLable}>"</label>
                <div className={styles.WrapSlider}>

                    <div 
                        className={clsx(styles.btnPrev, !canPrev && styles.disabled)}
                        onClick={handlePrev}
                    >
                        <i className="fi fi-rr-angle-small-left"></i>
                    </div>

                        {reviews.length > 0 && reviews[currentIndex] && (
                            <div 
                                key={currentIndex}
                                className={clsx(styles.ReviewSlide)}
                            >
                                <div className={styles.Title}>{reviews[currentIndex].title}</div>
                                <div className={styles.Content}>{reviews[currentIndex].content}</div>
                                <div className={styles.Customer}>
                                    <div className={styles.WrapAvatar}>
                                        <Image
                                            src={reviews[currentIndex].customer?.avatar}
                                            alt="ReviewImage"
                                            width={100}
                                            height={100}
                                            className={styles.CustomerAvatar}
                                        />
                                    </div>
                                    <div className={styles.CustomerName}>{reviews[currentIndex].customer?.name}</div>
                                    <div className={styles.CustomerName}>{reviews[currentIndex].customer?.role}</div>
                                </div>
                            </div>
                        )}

                    <div 
                        className={clsx(styles.btnNext, !canNext && styles.disabled)}
                        onClick={handleNext}
                    >
                        <i className="fi fi-rr-angle-small-right"></i>
                    </div>

                    <div className={styles.dots}>
                        {reviews.map((_, index) => (
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