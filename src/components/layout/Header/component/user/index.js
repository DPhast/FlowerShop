"use client";

import '@flaticon/flaticon-uicons/css/all/all.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {useState, useEffect} from 'react';

import styles from './user.module.css';

export default function User({isScrolled}) {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={clsx(styles.trigger,
                isScrolled && styles.isScrolled
            )} onClick={() => setIsOpen(true)}>
                <i className="fi fi-rr-user"></i>
            </button>

            <div className={clsx(
                styles.modal,
                {[styles.open]: isOpen}
                
            )}
                onClick = {() => {setIsOpen(false)}}
            >
                <div className={clsx(styles.frame,
                    {[styles.Active]: isOpen}
                )}>
                    <form className={styles.form}
                    onClick={(e) => e.stopPropagation()}>
                        <div className={styles.group}>
                            <span className={styles.userText}>Tên tài khoản</span>
                            <div className={styles.groupItem}>
                                <label htmlFor="userName">
                                    <i className="fi fi-sr-user"></i>
                                </label>
                                <input
                                    id="userName"
                                    name="userName"
                                    placeholder="Tên tài khoản"
                                    className={styles.input}
                                />
                            </div>
                            <span className={styles.userText}>Mẩu khẩu</span>
                            <div className={styles.groupItem}>
                                <label htmlFor="password">
                                    <i className="fi fi-sr-lock"></i>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.userBottom}>
                                <Link href="/" className={styles.changePassword}>Đổi mật khẩu</Link>
                                <Link href="/" className={styles.ForgotPassword}>Quên mật khẩu?</Link>
                            </div>
                            
                            <div className={styles.groupBtn}>
                                <button className={clsx("button btn-item", styles.button)}>
                                    Đăng Nhập
                                </button>
                            </div>
                            <div className={styles.register}>
                                <span>Bạn chưa có tài khoản?</span>
                                <Link href="/" className={styles.registerLink}>Đăng Kí ngay</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}