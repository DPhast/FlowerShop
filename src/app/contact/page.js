import Link from "next/link";
import styles from "./contact.module.css";


export default function ContactPage() {
    return (
        <main className={styles.page}>
            <section className={styles.breadcrumbSection}>
                <div className={styles.breadcrumbOverlay} />
                <div className={styles.breadcrumbInner}>
                    <h1 className={styles.breadcrumbTitle}>Liên hệ</h1>
                    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                        <Link className={styles.breadcrumbLink} href="/">
                            Trang chủ
                        </Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent} aria-current="page">
                            Liên hệ
                        </span>
                    </nav>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={styles.title}>Thông tin liên hệ</h2>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoLabel}>Địa chỉ</div>
                                <div className={styles.infoValue}>TP.HCM</div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoLabel}>Hotline</div>
                                <div className={styles.infoValue}>0909 123 456</div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoLabel}>Email</div>
                                <div className={styles.infoValue}>bloom@gmail.com</div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoLabel}>Giờ mở cửa</div>
                                <div className={styles.infoValue}>08:00 – 21:00 (T2–CN)</div>
                            </div>
                        </div>

                        <div className={styles.ctaRow}>
                            <Link className={styles.primaryBtn} href="/products-grid">
                                Xem sản phẩm
                            </Link>
                            <a className={styles.secondaryBtn} href="tel:0909123456">
                                Gọi ngay
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.title}>Gửi tin nhắn</h2>

                        <form className={styles.form}>
                            <div className={styles.row}>
                                <label className={styles.label}>
                                    Họ tên
                                    <input className={styles.input} placeholder="Đỗ Đại P" />
                                </label>
                                <label className={styles.label}>
                                    Số điện thoại
                                    <input className={styles.input} placeholder="0909..." />
                                </label>
                            </div>
                            <label className={styles.label}>
                                Email
                                <input className={styles.input} placeholder="you@example.com" />
                            </label>
                            <label className={styles.label}>
                                Nội dung
                                <textarea className={styles.textarea} placeholder="Bạn cần Bloom hỗ trợ gì?" rows={5} />
                            </label>
                            <button type="button" className={styles.submitBtn}>
                                Gửi liên hệ
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.mapCard}>
                    <h2 className={styles.title}>Bản đồ</h2>
                    <div className={styles.mapContainer}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31353.146609824937!2d106.7057152!3d10.8003328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299a2a7aeb89%3A0xfe75f3431d8fd812!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2kgLSBQaMOibiBoaeG7h3UgTWnhu4FuIE5hbQ!5e0!3m2!1svi!2s!4v1773667221044!5m2!1svi!2s"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps - Bloom Shop Location"
                            className={styles.mapIframe}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}