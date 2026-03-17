"use client"

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import clsx from "clsx";

import { Card, Sidebar } from "./components";
import styles from "./hero.module.css";

const SLIDE_WIDTH = 270;

export default function Hero({ data }) {
    const [items, setItems] = useState(data);
    const [action, setAction] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const trackRef = useRef(null);

    const handlePrev = () => {
        if (action !== 0) return;
        setAction(-1);
        setActiveIndex((prev) => {
            if (prev <= 0) return items.length - 1;
            return prev - 1;
        });
    };

    const handleNext = () => {
        if (action !== 0) return;
        setAction(1);
        setActiveIndex((next) => {
            if (next >= items.length - 1) return 0;
            return next + 1;
        });
    };

    const handleTransitionEnd = (e) => {
        if (e.target !== trackRef.current) return;
        
        const newItems = [...items];
        if (action === 1) {
            const firstItem = newItems.shift();
            newItems.push(firstItem);
        } else if (action === -1) {
            const lastItem = newItems.pop();
            newItems.unshift(lastItem);
        }
        
        setItems(newItems);
        setAction(0);
    };

    return (
        <section className={styles.hero}>
            <div className={clsx(styles.background)}>
                <Image
                    src={items[action + 1]?.image}
                    alt={items[action + 1]?.title || "Hero"}
                    fill
                    priority
                    className={styles.backgroundImg}
                    sizes="100vw"
                    unoptimized
                />
                <div className={clsx(styles.modal)}/>
            </div>

            <div className={clsx("containerFluid", styles.wrap)}>
                <div className={styles.main}>
                    <div className={styles.group}>
                        <Sidebar itemCount={items.length} activeIndex={activeIndex} />

                        <div className={styles.info}>
                            <h3 key={activeIndex} className={styles.infoName}>
                                {items[action + 1]?.title}
                            </h3>
                            <p key={`${activeIndex}-desc`} className={styles.infoDescription}>
                                {items[action + 1]?.description}
                            </p>

                            <Link
                                href={items[action + 1]?.buttonLink || "/products-grid"}
                                className={clsx("button", styles.cta)}
                            >
                                <span className={styles.btnText}>
                                    {items[action + 1]?.buttonText || "Khám phá"}
                                </span>
                                <i className="fi fi-rr-arrow-small-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.viewport}>
                        <div
                            ref={trackRef}
                            className={styles.track}
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(${-(action + 1) * SLIDE_WIDTH}px)`,
                                transition: action !== 0 ? "transform 0.6s ease" : "none",
                            }}
                        >
                            {items.map((value, index) => (
                                <Card
                                    key={value._id || value.title || index}
                                    hero={value}
                                    isActive={index === 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.tail}>
                    <div className={styles.actions}>
                        <button onClick={handlePrev}>
                            <i className="fi fi-br-angle-small-left"></i>
                        </button>
                        <button onClick={handleNext}>
                            <i className="fi fi-br-angle-small-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}