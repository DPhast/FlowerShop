"use client";

import '@flaticon/flaticon-uicons/css/all/all.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {useState, useEffect} from 'react';

import styles from './cart.module.css';

export default function Cart() {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={styles.trigger} onClick={() => setIsOpen(true)}>
                <i className="fi fi-rr-shopping-cart"></i>
            </button>

            <div className={clsx(
                styles.modal,
                {[styles.open]: isOpen}
                
            )}
                onClick = {() => {setIsOpen(false)}}
            >
                <div className={clsx(styles.frame,
                    {[styles.Active]: isOpen}
                )}
                onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.cartHeader}>
                        <h2 className={styles.cartTitle}>
                            Giỏ hàng
                        </h2>
                        <button 
                            className={styles.closeBtn}
                            onClick={() => setIsOpen(false)}
                        >
                            <i className="fi fi-rr-cross-small"></i>
                        </button>
                    </div>
                    <hr></hr>
                    <section className={styles.group}>
                        <div className={styles.groupItem}>
                            <h3 className={styles.groupTitle}>Giỏ hàng của bạn đang trống</h3>
                            <p className={styles.groupDecripsion}>Giỏ hàng của bạn hiện chưa có sản phẩm nào.Nhanh tay lên nào, hãy thêm vào đó những sản phẩm bạn yêu thích!</p>
                            <button className={clsx("button",styles.button)}>Bắt đầu mua sắm</button>
                        </div>
                    </section>
                </div>
            </div>

        </>
    );
}