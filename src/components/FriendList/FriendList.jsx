import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.ulFriend}>
      {friends.map((friend) => (
        <li className={css.liFriend} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
