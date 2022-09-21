import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const cx = classNames.bind(styles);

function Header({ children }) {
    return (
        <header className={cx(children)}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img
                            width="228"
                            height="65"
                            src="https://deltalabsjsc.com/wp-content/uploads/2022/05/Logo-Delta-Labs.svg"
                            alt="Tiktok"
                            loading="lazy"
                            className={cx('logo')}
                        />
                    </Link>
                </div>
                <div>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
