import PropTypes from 'prop-types';
import './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={clsx('itemFriend')}>
        <span
          className={clsx('statusFriend', {
            online: isOnline,
            offline: !isOnline,
          })}
        ></span>
        <img
          src={avatar}
          alt="User avatar"
          className={clsx('friendAvatar')}
        ></img>
        <p className={clsx('friendName')}>{name}</p>
      </li>
    );
  };
  
  export const FriendList = ({ friends }) => {
    return (
      <ul className={clsx('friend-list')}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
      })
    ),
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };