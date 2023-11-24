import user from '../../json/user.json';
import css from './Profile.module.css'

//  <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

//const user = {username, avatar, tag, location, stats}

export const Profile = () => {
    return <div className={css.container}>
<div className={css.description}>
    <img
      src={user.avatar}
      alt={user.username}
      className={css.avatar}
      width="100"
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>@{user.tag}</p>
    <p className={css.location}>{user.location}l</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span> <br />
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span> <br />
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span> <br />
      <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
}