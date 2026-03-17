"use client";

import '@flaticon/flaticon-uicons/css/all/all.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {useState, useEffect} from 'react';

import styles from './search.module.css';

export default function Search({isScrolled}) {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={clsx(styles.trigger,
                isScrolled && styles.isScrolled
            )} onClick={() => setIsOpen(true)}>
                <i className="fi fi-rr-search"></i>
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
                onClick={(e) => e.stopPropagation()}>
                    <form className={styles.form}
                    onClick={(e) => e.stopPropagation()}>
                        <div className={styles.group}>
                            <label htmlFor="search">
                                <i className="fi fi-br-search"></i>
                            </label>
                            <input
                                id="search"
                                name="search"
                                placeholder="Hoa cho ngày cưới..."
                                className={styles.input}
                            />
                            <button className={clsx("button", styles.button)}>
                                Tìm kiếm
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}