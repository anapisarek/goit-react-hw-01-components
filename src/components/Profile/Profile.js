import PropTypes from 'prop-types';
import './Profile.css';
import clsx from 'clsx';

export const Profile = ({
  name = 'John Doe',
  avatar,
  tag,
  location = 'Planet Earth',
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx('profile')}>
      <div className={clsx('description')}>
        <img src={avatar} alt="User avatar" className={clsx('avatar')}></img>
        <p className={clsx('name')}>{name}</p>
        <p className={clsx('tag')}>@{tag}</p>
        <p className={clsx('location')}>{location}</p>
      </div>
      <ul className={clsx('stats')}>
        <li>
          <span className={clsx('profileLabel')}>Followers</span>
          <span className={clsx('quantity')}>{followers}</span>
        </li>
        <li>
          <span className={clsx('profileLabel')}>Views</span>
          <span className={clsx('quantity')}>{views}</span>
        </li>
        <li>
          <span className={clsx('profileLabel')}>Likes</span>
          <span className={clsx('quantity')}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.number,
};