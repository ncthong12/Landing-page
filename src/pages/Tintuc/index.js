import classNames from 'classnames/bind';
import styles from './Tintuc.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Tintuc() {
    return (
        <div>
            <h1 className={cx('content')}>Tin tuc</h1>
            <h1 className={cx('content')}>Tin tuc</h1>
            <h1 className={cx('content')}>Tin tuc</h1>
            <h1 className={cx('content')}>Tin tuc</h1>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
            <h1 className={cx('content')}>Tin tuc</h1>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
            <h1 className={cx('content')}>Tin tuc</h1>
            <img className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A"></img>
        </div>
    );
}

export default Tintuc;
