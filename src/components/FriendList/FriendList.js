// import PropTypes from 'prop-types';

// import friends from '../../friends.json';
import css from './FriendList.module.css';
export const FriendsList = props => {
  return (
    <section className={css.friendsList}>
      <ul key="FrendList" className={css.friendList}>
        {props.friends.map(el => (
          <li className={css.friendListItem} key={el.id}>
            {/* <span className={el.isOnline ? 'isOnline' : 'isOffline'}></span> */}
            <span
              className={css.status}
              style={{ backgroundColor: 'red' }}
            ></span>
            <img
              className="friend-list-avatar"
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{el.name}</p>
            {/* isOnline={el.isOnline} */}
          </li>
        ))}
      </ul>
    </section>
  );
};
