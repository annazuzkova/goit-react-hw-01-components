import css from "./Friends.module.css";
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  console.log(avatar);

  return (
    <li className={css.item} key={id}>
      {isOnline ? (
        <span className={css.status__true}></span>
      ) : (
        <span className={css.status__false}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
