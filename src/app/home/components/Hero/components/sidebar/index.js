"use client";

import clsx from "clsx";
import styles from "./sidebar.module.css";

export default function Sidebar({ itemCount, activeIndex }) {
    return (
        <div className={styles.sidebar} aria-hidden="true">
            {Array.from({ length: itemCount }).map((_, idx) => (
                <span
                    key={idx}
                    className={clsx(styles.dot, idx === activeIndex && styles.active)}
                />
            ))}
        </div>
    );
}

