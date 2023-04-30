import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css'

export { FriendList };

FriendList.propTypes = { friends: PropTypes.array.isRequired };

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return <FriendListItem {...friend} key={friend.id} />;
      })}
    </ul>
  );
}
