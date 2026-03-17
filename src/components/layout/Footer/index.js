// components/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOverlay}></div>
            
            <div className={`container ${styles.footerContent}`}>
                <div className={`row gy-4 ${styles.footerRow}`}>

                    <div className={`col-lg-4 col-md-6 ${styles.about}`}>
                        <div className={styles.logoName}>
                            <Link href="/">
                                <Image 
                                    src="/images/logo.webp" 
                                    alt="Bloom Logo"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <Link href="/">
                                <h3>Bloom</h3>
                            </Link>
                        </div>
                        <h4 className={styles.slogan}>Đánh thức vẻ đẹp, kết nối trái tim</h4>
                        <p className={styles.description}>
                            Hãy để Bloom cùng bạn lưu giữ những khoảnh khắc đáng nhớ nhất
                        </p>
                    </div>

                    <div className={`col-lg-2 col-md-6 ${styles.quicklink}`}>
                        <h4>Liên Kết Nhanh</h4>
                        <ul>
                            <li><Link href="/">Trang Chủ</Link></li>
                            <li><Link href="/products">Sản Phẩm</Link></li>
                            <li><Link href="/services">Dịch vụ</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Liên Hệ</Link></li>
                        </ul>
                    </div>

                    <div className={`col-lg-2 col-md-6 ${styles.information}`}>
                        <h4>Thông Tin</h4>
                        <ul>
                            <li><Link href="/about">Về chúng tôi</Link></li>
                            <li><Link href="/shipping">Chính Sách Giao Hàng</Link></li>
                            <li><Link href="/returns">Đổi Trả</Link></li>
                            <li><Link href="/privacy">Bảo Mật</Link></li>
                        </ul>
                    </div>

                    <div className={`col-lg-2 col-md-6 ${styles.support}`}>
                        <h4>Hỗ Trợ</h4>
                        <ul>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/guide">Hướng Dẫn Mua</Link></li>
                        </ul>
                    </div>

                    <div className={`col-lg-2 col-md-6 ${styles.contact}`}>
                        <h4>Liên Hệ</h4>
                        <p><i className="fi fi-rr-marker"></i> TP.HCM</p>
                        <p><i className="fi fi-rr-phone-call"></i> 0909 123 456</p>
                        <p><i className="fi fi-rr-envelope"></i> bloom@gmail.com</p>
                    </div>

                </div>

                <hr className={styles.divider} />

                <div className={`row ${styles.footerBottom} align-items-center`}>
                    <div className={`col-lg-4 col-md-12 ${styles.socialIcons}`}>
                        <Link href="#"><i className="fi fi-brands-facebook"></i></Link>
                        <Link href="#"><i className="fi fi-brands-twitter"></i></Link>
                        <Link href="#"><i className="fi fi-brands-instagram"></i></Link>
                    </div>

                    <div className={`col-lg-4 col-md-12 ${styles.copyright}`}>
                        <p>© 2026 Bloom. Giữ toàn quyền bản quyền.</p>
                    </div>

                    <div className={`col-lg-4 col-md-12 ${styles.paymentIcons}`}>
                        <Link href="#"><i className="fi fi-brands-cc-amazon-pay"></i></Link>
                        <Link href="#"><i className="fi fi-brands-paypal"></i></Link>
                        <Link href="#"><i className="fi fi-brands-visa"></i></Link>
                        <Link href="#"><i className="fi fi-brands-apple-pay"></i></Link>
                        <Link href="#"><i className="fi fi-brands-stripe"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}