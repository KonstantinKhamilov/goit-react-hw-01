import css from "./FriendList.module.css";

export default function FriendListItem({ friend }) {
  return (
    <div className={css.box}>
      <img className={css.avatar} src={friend.avatar} alt="Avatar" />
      <p className={css.name}>{friend.name}</p>
      <p
        className={`${css.status} ${
          friend.isOnline ? css.online : css.offline
        }`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
