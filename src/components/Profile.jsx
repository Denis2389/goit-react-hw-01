import styles from './Profile.module.css'
import avatar from '../avatar.jpg'


const Profile = ({ name, tag, location, stats }) => {
    return (
      <div className={styles.container}>
        <img className={styles.avatar} src={avatar} alt="avatar" width={170} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
        <ul className={styles.list}>
          <li>
            <span>Followers</span>
            <span className={styles.link}>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={styles.link}>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={styles.link}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}


export default Profile