import style from './notification.module.scss';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
        <p className={style.message}>{message}</p>
    );
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;