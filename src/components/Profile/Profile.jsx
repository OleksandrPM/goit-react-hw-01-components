import PropTypes from 'prop-types';
import css from './Profile.module.css';

export { Profile };

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

function Profile(props) {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    username = 'user',
    tag,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
