import style from "./Profile.module.css";
console.log(style);
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.firstDiv}>
        <img className={style.image} src={image} alt="User avatar" />
        <p className={style.Name}>{name}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>
      <ul>
        <li>
          <span className={style.liSpan}>Followers</span>
          <span className={style.spanStats}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.liSpan}>Views</span>
          <span className={style.spanStats}>{stats.views}</span>
        </li>
        <li>
          <span className={style.liSpan}>Likes</span>
          <span className={style.spanStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
