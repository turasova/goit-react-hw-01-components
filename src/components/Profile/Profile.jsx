import css from './Profile.module.css'


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.container}>
<div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width="100"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}l</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span> <br />
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span> <br />
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span> <br />
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}