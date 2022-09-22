import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import { useState, useEffect } from 'react';
import TopButton from '../components/TopButton';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [headerClass, setheaderClass] = useState('init');
    // const [showGoToTop, setshowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollTop = window.scrollY;
            setheaderClass(scrollTop >= 120 ? 'down' : headerClass !== 'init' ? 'top' : 'init');
            // setshowGoToTop(scrollTop >= 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerClass]);

    return (
        <div className={cx('wrapper')}>
            <Header>{headerClass}</Header>
            <div className={cx('container')}>
                <div className={cx('content-bg')}></div>
                {children}
            </div>
            <TopButton>{headerClass}</TopButton>
        </div>
    );
}

export default DefaultLayout;
