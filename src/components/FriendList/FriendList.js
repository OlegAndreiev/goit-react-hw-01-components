// import PropTypes from 'prop-types';

// import friends from '../../friends.json';
import css from './FriendList.module.css';
export const FriendsList = props => {
  return (
    <section className="friends-list">
      <ul key="FrendList" className="friend-list">
        {props.friends.map(el => (
          <li key={el.id}>
            <span className={el.isOnline ? 'isOnline' : 'isOffline'}>
              sdasd
            </span>
            <img
              className="avatar"
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{el.name}</p>
            isOnline={el.isOnline}
          </li>
        ))}
      </ul>
    </section>
  );
};
