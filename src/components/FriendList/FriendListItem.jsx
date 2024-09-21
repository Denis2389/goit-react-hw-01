import css from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={`${css.friend_list} ${isOnline ? css.online : css.offline}`}>
        <img src={avatar} alt="avatar" width={82}/>
        <p className={css.name}>{name}</p>
        <p className={css.status}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    );
}

export default FriendListItem