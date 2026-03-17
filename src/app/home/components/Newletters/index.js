"use client";

import { useState } from "react";
import styles from "./Newletters.module.css";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@') || !email.includes('.')) {
            setIsSubscribed(false);
            return;
        }

        setIsSubscribed(true);
        setEmail("");
        
        setTimeout(() => {
            setIsSubscribed(false);
        }, 3000);
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <h2 className={styles.title}>Đăng ký nhận tin</h2>
                <p className={styles.description}>
                    Nhận ưu đãi và bài viết mới nhất từ chúng tôi
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        required
                        placeholder="Email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        Đăng ký
                    </button>
                </form>

                {isSubscribed && (
                    <div className={styles.notify}>
                        <div className={styles.notifyContent}>
                            <i className="fi fi-rr-check-circle"></i>
                            <span className={styles.notifyText}>Đăng Ký Thành Công</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}