import PropTypes from 'prop-types';

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
    <li className="item">
      {isOnline ? (
        <span className="status" style={{ backgroundColor: onlineMarkerColor }}>
          Online delete
        </span>
      ) : (
        <span
          className="status"
          style={{ backgroundColor: offlineMarkerColor }}
        >
          Offline delete
        </span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
