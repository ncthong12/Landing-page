import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('navbar')}>
            <Link to="/#gioi-thieu" className={cx('navbar-link')}>
                Giới thiệu
            </Link>
            <Link to="/#thanh-tuu" className={cx('navbar-link')}>
                Thành tựu
            </Link>
            <Link to="/#doi-ngu" className={cx('navbar-link')}>
                Đội ngũ
            </Link>
            <Link to="/#doi-tac" className={cx('navbar-link')}>
                Đối tác
            </Link>
            <Link to="/tin-tuc/" className={cx('navbar-link')}>
                Tin tức
            </Link>
            <Link to="/lien-he/" className={cx('navbar-link')}>
                Liên hệ
            </Link>
        </nav>
    );
}

export default Navbar;
