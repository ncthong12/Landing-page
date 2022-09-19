import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Navbar from '../Navbar';

const cx = classNames.bind(styles);

function Header() {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('wrapper');
        var sticky = header.offsetTop;
        console.log(sticky);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <img
                        width="228"
                        height="65"
                        src="https://deltalabsjsc.com/wp-content/uploads/2022/05/Logo-Delta-Labs.svg"
                        alt="Tiktok"
                        loading="lazy"
                    />
                </Link>
                <div>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
