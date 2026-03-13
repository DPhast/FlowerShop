"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import styles from "./sidebar.module.css";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExploreActive, setIsExploreActive] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Effect để theo dõi resize
    useEffect(() => {
        // Hàm kiểm tra kích thước màn hình
        const checkScreenSize = () => {
            const desktop = window.innerWidth > 850; // 850 là breakpoint từ CSS
            setIsDesktop(desktop);
            
            // Nếu là desktop và sidebar đang mở thì đóng sidebar
            if (desktop && isOpen) {
                setIsOpen(false);
            }
        };

        // Kiểm tra ngay khi component mount
        checkScreenSize();

        // Thêm event listener cho resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup function
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isOpen]);

    const handleExploreClick = (e) => {
        e.preventDefault();
        setIsExploreActive(!isExploreActive);
    }

    const handleSubItemClick = ()  => {
        setIsExploreActive(false);
        setIsOpen(false)
    }
    return (
        <>
            <button className={styles.trigger} onClick={() => setIsOpen(true)}>
                <i className="fi fi-br-menu-burger"></i>
            </button>
            <div
                className={clsx(styles.modal, { [styles.open]: isOpen })}
                onClick={() => setIsOpen(false)}
            >
                <aside
                    className={styles.sidebar}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.head}>
                        <div className={styles.avatar}>
                            <Image
                                src="/images/logo.webp"
                                width={50}
                                height={50}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.headInfo}>
                            <span>Bloom</span>
                        </div>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <Link className={styles.navLink} href="/">
                                    <i className="fi fi-rr-home"></i>
                                    <span>Trang chủ</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.navLink}
                                    href="/"
                                >
                                    <i className="fi fi-rs-marker"></i>
                                    <span>Về chúng tôi</span>
                                </Link>
                            </li>
                            <li className={clsx(styles.navListItem, styles.hasSubmenu,
                                {[ styles.active]:isExploreActive}
                            )}>
                                <Link href="/" className={styles.navListLink}
                                onClick={handleExploreClick}
                                ><i className="fi fi-rr-lightbulb-on"></i>Khám phá<i className={clsx("fi",
                                    isExploreActive ? "fi-rs-caret-up" : "fi-rs-caret-down")}></i></Link>
                                <ul className={clsx(styles.navListSublist,
                                    {[styles.show]:isExploreActive})}>
                                    <li className={styles.navListSublistItem}><Link href="/product-grid" onClick={handleSubItemClick}>Sản phẩm</Link></li>
                                    <li className={styles.navListSublistItem}><Link href="#">Dịch vụ</Link></li>
                                    <li className={styles.navListSublistItem}><Link href="#">Hướng dẫn mua hàng</Link></li>
                                    <li className={styles.navListSublistItem}><Link href="#">FAQ</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    className={styles.navLink}
                                    href="/contact"
                                >
                                    <i className="fi fi-rs-phone-call"></i>
                                    <span>Blogs</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.navLink}
                                    href="/contact"
                                >
                                    <i className="fi fi-rs-phone-call"></i>
                                    <span>Liên hệ</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.tail}>
                        <Link className={styles.logout} href="/logout">
                            <i className="fi fi-br-exit"></i>
                            <span>Đăng xuất</span>
                        </Link>
                    </div>
                </aside>
            </div>
        </>
    );
}
