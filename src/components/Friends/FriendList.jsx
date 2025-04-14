import { FriendListItem } from "./FriendListItem";
import css from "./Friends.module.css";
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        );
      })}
    </ul>
  );
};
