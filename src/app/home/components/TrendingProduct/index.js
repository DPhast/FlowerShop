"use client"

import { useState } from "react";
import clsx from "clsx";
import {ProductCard} from "@/components";
import styles from "./TrendingProducts.module.css";

const VISIBLE_ITEMS = 4;

export default function TrendingProducts({ data }) {
    const trendingProducts = data?.filter(product => product.isTrending === true) || [];
    
    const [startIndex, setStartIndex] = useState(0);
    
    const maxStartIndex = Math.max(0, trendingProducts.length - VISIBLE_ITEMS);
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

    if (trendingProducts.length === 0) {
        return null;
    }

    const visibleProducts = trendingProducts.slice(startIndex, startIndex + VISIBLE_ITEMS);

    return (
        <section className={styles.TrendingProducts}>
            <div className={styles.containerFluid}>
                <h2 className={styles.TrendingTitle}>Sản phẩm thịnh hành</h2>
                
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
                                key={product._id || index}
                                product={product}
                                variant="trending"
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
                    Hiển thị {startIndex + 1} - {Math.min(startIndex + VISIBLE_ITEMS, trendingProducts.length)} / {trendingProducts.length} sản phẩm
                </div>
            </div>
        </section>
    );
}