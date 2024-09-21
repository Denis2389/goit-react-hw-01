import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'


const FriendList = ({ friends }) => {
    return (
      <ul className={css.list}>
        {friends.map((friend) => (
          <li className={css.listTitle} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
}

export default FriendList