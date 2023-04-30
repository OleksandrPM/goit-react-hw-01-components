import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export { FriendListItem };

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

const onlineMarkerColor = '#3aeb34';
const offlineMarkerColor = '#c21111';

function FriendListItem(props) {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name = 'user',
    isOnline,
  } = props;

  return (
    <li className={css.item}>
      {isOnline ? (
        <span
          className={css.status}
          style={{ backgroundColor: onlineMarkerColor }}
        ></span>
      ) : (
        <span
          className={css.status}
          style={{ backgroundColor: offlineMarkerColor }}
        ></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
