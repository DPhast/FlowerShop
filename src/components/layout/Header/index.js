"use client";

import '@flaticon/flaticon-uicons/css/all/all.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {useState, useEffect} from 'react';

import {Search,Cart,User,Sidebar } from "./component";
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExploreActive, setIsExploreActive] = useState(false);
    const [isUserActive, setIsUserActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const handleExploreClick = (e) => {
        e.preventDefault();
        setIsExploreActive(!isExploreActive);
    }

    const handleSubItemClick = ()  => {
        setIsExploreActive(false);
    }

    const handleUserClick = (e) => {
        e.preventDefault();
        setIsUserActive(!isUserActive);
    }

    const handleUserSubItemClick = ()  => {
        setIsUserActive(false);
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        setIsSearchActive(!isSearchActive);
    }

    const handleSearchItemClick = (e) => {
        setIsSearchActive(false);
    }

    return (
        <header className={clsx( 'header',styles.header, { [styles.scrolled]: isScrolled, [styles.notScrolled]: !isScrolled })}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Image 
                        src="/images/logo.webp" 
                        alt="Logo" 
                        width={70}
                        height={70}
                        priority
                    />
                    <h1>Bloom</h1>
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <Link href="/" className={styles.navListLink}>Trang chủ</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link href="/" className={styles.navListLink}>Về chúng tôi</Link>
                        </li>
                        <li className={clsx(styles.navListItem, styles.hasSubmenu,
                            {[ styles.active]:isExploreActive}
                        )}>
                            <Link href="/" className={styles.navListLink}
                            onClick={handleExploreClick}
                            >Khám phá</Link>
                            <i className={clsx("fi",
                            isExploreActive ? "fi-rs-caret-up" : "fi-rs-caret-down")}></i>
                            <ul className={clsx(styles.navListSublist,
                                {[styles.show]:isExploreActive})}>
                                <li className={styles.navListSublistItem}><Link href="/product-grid" onClick={handleSubItemClick}>Sản phẩm</Link></li>
                                <li className={styles.navListSublistItem}><Link href="#">Dịch vụ</Link></li>
                                <li className={styles.navListSublistItem}><Link href="#">Hướng dẫn mua hàng</Link></li>
                                <li className={styles.navListSublistItem}><Link href="#">FAQ</Link></li>
                            </ul>
                        </li>
                        <li className={styles.navListItem}>
                            <Link href="/" className={styles.navListLink}>Blogs</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link href="/" className={styles.navListLink}>Liên hệ</Link>
                        </li>
                    </ul>
                </nav>

                <Search />

                <User />

                <Cart />
                
                <Sidebar />
            </div>
        </header>
    );
}