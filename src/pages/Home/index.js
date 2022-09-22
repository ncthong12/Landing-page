import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('content-first')}>
            <div className={cx('wrapper-left')}>
                <div className={cx('text-above')}>
                    <h2>
                        Stay
                        <br />
                        <span style={{ color: '#1083FF' }}>one step</span>
                        <br />
                        ahead
                    </h2>
                </div>
                <div className={cx('below')}>
                    <span className={cx('logo-below')}>
                        <img src={images.logo} alt="abc" />
                    </span>
                    <div className={cx('text-below')}>
                        <h3>
                            <span>Tích hợp mọi yêu cầu phức tạp nhất trên một hệ thống đơn giản và hiệu quả cao </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
