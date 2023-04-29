import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export { FriendList };

FriendList.propTypes = { friends: PropTypes.array.isRequired };

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem {...friend} key={friend.id} />;
      })}
    </ul>
  );
}
