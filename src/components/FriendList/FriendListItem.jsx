import css from './FriendList.module.css';
export const FriendListItem = ({ friendItem }) => {
  return (
    <li className={css.item}>
      {friendItem.isOnline ? (
        <span className={css.statusOnline}>{friendItem.isOnline}</span>
      ) : (
        <span className={css.statusOffline}>{friendItem.isOnline}</span>
      )}

      <img className={css.avatar} src={friendItem.avatar} alt="User avatar" />
      <p className={css.name}>{friendItem.name}</p>
    </li>
  );
};