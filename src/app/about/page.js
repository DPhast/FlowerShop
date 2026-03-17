import Link from "next/link";
import styles from "./about.module.css";


export default function AboutPage() {
    return (
        <main className={styles.page}>
            <section className={styles.breadcrumbSection}>
                <div className={styles.breadcrumbOverlay} />
                <div className={styles.breadcrumbInner}>
                    <h1 className={styles.breadcrumbTitle}>Về chúng tôi</h1>
                    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                        <Link className={styles.breadcrumbLink} href="/">
                            Trang chủ
                        </Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent} aria-current="page">
                            Về chúng tôi
                        </span>
                    </nav>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <div className={styles.heroText}>
                            <h2 className={styles.title}>Bloom - Hoa cho mọi khoảnh khắc</h2>
                            <p className={styles.lead}>
                                Bloom là cửa hàng hoa tươi mang phong cách hiện đại, tập trung vào trải nghiệm mua sắm
                                tinh tế và những thiết kế phù hợp từng dịp.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <div className={styles.statValue}>1000+</div>
                                    <div className={styles.statLabel}>Đơn hàng mỗi tháng</div>
                                </div>
                                <div className={styles.stat}>
                                    <div className={styles.statValue}>4.8/5</div>
                                    <div className={styles.statLabel}>Đánh giá khách hàng</div>
                                </div>
                                <div className={styles.stat}>
                                    <div className={styles.statValue}>24h</div>
                                    <div className={styles.statLabel}>Hỗ trợ nhanh</div>
                                </div>
                            </div>
                            <div className={styles.ctaRow}>
                                <Link className={styles.primaryBtn} href="/products-grid">
                                    Khám phá sản phẩm
                                </Link>
                                <Link className={styles.secondaryBtn} href="/contact">
                                    Liên hệ Bloom
                                </Link>
                            </div>
                        </div>

                        <div className={styles.heroCard}>
                            <h3 className={styles.cardTitle}>Giá trị cốt lõi</h3>
                            <ul className={styles.list}>
                                <li>
                                    <p>Chất lượng - hoa tươi chọn lọc, bảo quản chuẩn.</p>
                                </li>
                                <li>
                                    <p>Tinh tế - thiết kế hiện đại, phù hợp nhiều dịp.</p>
                                </li>
                                <li>
                                    <p>Đúng hẹn - giao nhanh, cập nhật trạng thái.</p>
                                </li>
                                <li>
                                    <p>Thân thiện - tư vấn dễ hiểu, hỗ trợ tận tình.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.block}>
                            <h3 className={styles.blockTitle}>Sứ mệnh</h3>
                            <p className={styles.text}>
                                Giúp bạn gửi gắm cảm xúc qua hoa - nhanh, đẹp và đúng ý nghĩa của từng khoảnh khắc.
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.blockTitle}>Tầm nhìn</h3>
                            <p className={styles.text}>
                                Trở thành điểm đến đáng tin cậy khi bạn cần một món quà tinh tế và giàu cảm xúc.
                            </p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.blockTitle}>Cam kết</h3>
                            <p className={styles.text}>
                                Minh bạch giá - hình ảnh thật - đổi/trả linh hoạt theo chính sách cửa hàng.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

