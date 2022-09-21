import styles from './TopButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TopButton({ children }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };
    return (
        <div id={cx(children)}>
            <img
                src="https://deltalabsjsc.com/wp-content/uploads/2022/07/z3550888079887_9605384eea8ba486da9bbfd51a0ac1e6-removebg-preview.png"
                alt=""
                style={{ width: '40px', height: '40px' }}
                onClick={scrollToTop}
            ></img>
        </div>
    );
}

export default TopButton;
