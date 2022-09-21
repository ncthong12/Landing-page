import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import { useState, useEffect } from 'react';
import TopButton from '../components/TopButton';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [headerClass, setheaderClass] = useState('top');
    const [showGoToTop, setshowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollTop = window.scrollY;
            setheaderClass(scrollTop >= 170 ? 'down' : 'top');
            setshowGoToTop(scrollTop >= 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header>{headerClass}</Header>
            <div className={cx('container')}>
                <div className={cx('content-bg')}></div>
                <div className={cx('content-left')}>{children}</div>
            </div>
            {showGoToTop && <TopButton>{'down'}</TopButton>}
            {/* {showGoToTop && <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to top</button>} */}
        </div>
    );
}

export default DefaultLayout;
