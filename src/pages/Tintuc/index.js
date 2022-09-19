import classNames from 'classnames/bind';
import styles from './Tintuc.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Tintuc() {
    return (
        <div>
            <h2 className={cx('content')}>Tin tuc</h2>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
            <h2 className={cx('content')}>Tin tuc</h2>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
            <h2 className={cx('content')}>Tin tuc</h2>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
        </div>
    );
}

export default Tintuc;
