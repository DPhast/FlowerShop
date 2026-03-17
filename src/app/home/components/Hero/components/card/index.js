 "use client";

import Image from "next/image";
import clsx from "clsx";

import styles from "./card.module.css";

export default function Card({ hero, isActive }) {
    return (
        <div className={clsx(styles.card, isActive && styles.active)}>
            <div className={styles.thumb}>
                <Image
                    src={hero.image}
                    alt={hero.title || "Hero"}
                    fill
                    sizes="270px"
                    className={styles.thumbImage}
                    unoptimized
                />
            </div>
            <div className={styles.meta}>
                <p className={styles.title}>{hero.title}</p>
            </div>
        </div>
    );
}

