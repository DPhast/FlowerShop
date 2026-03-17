"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, variant = "default" }) {
    const isSale = product.discount > 0;
    const salePrice = isSale 
        ? product.price * (1 - product.discount / 100) 
        : product.price;

    return (
        <div className={clsx(styles.productCard, styles[variant])}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 270px"
                    className={styles.productImage}
                />
                
                <div className={styles.badgeContainer}>
                    {product.isNew && (
                        <span className={clsx(styles.badge, styles.newBadge)}>Mới</span>
                    )}
                    {isSale && (
                        <span className={clsx(styles.badge, styles.saleBadge)}>
                            -{product.discount}%
                        </span>
                    )}
                </div>

                <div className={styles.actionSidebar}>
                    <button className={styles.actionBtn} aria-label="Yêu thích">
                        <i className="fi fi-rr-heart"></i>
                    </button>
                    <button className={styles.actionBtn} aria-label="Xem nhanh">
                        <i className="fi fi-rr-eye"></i>
                    </button>
                    <button className={styles.actionBtn} aria-label="Thêm vào giỏ">
                        <i className="fi fi-rr-shopping-cart-add"></i>
                    </button>
                </div>
            </div>

            <div className={styles.productInfo}>
                <Link href={`/product/${product._id}`} className={styles.productName}>
                    {product.name}
                </Link>
                
                <div className={styles.priceContainer}>
                    {isSale ? (
                        <>
                            <span className={styles.salePrice}>
                                {salePrice.toLocaleString()}đ
                            </span>
                            <span className={styles.originalPrice}>
                                {product.price.toLocaleString()}đ
                            </span>
                        </>
                    ) : (
                        <>
                            <span className={styles.regularPrice}>
                                {product.price.toLocaleString()}đ
                            </span>
                            <span className={styles.FadeoriginalPrice}>
                                {product.price.toLocaleString()}đ
                            </span>
                        </>
                    )}
                </div>

                <button className={styles.mobileAddToCart}>
                    <i className="fi fi-rr-shopping-cart-add"></i>
                    <span>Thêm vào giỏ</span>
                </button>
            </div>
        </div>
    );
}