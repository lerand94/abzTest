import classes from "./UserItem.module.css";

import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <Card>
      <div className={classes.user}>
        <img
          className={classes["user-photo"]}
          src={props.photo}
          alt={`${props.name} avatar`}
        />
        <p className={classes["user-name"]}>{props.name}</p>
        <span>{props.position}</span>
        <span>{props.email}</span>
        <span>{props.phone}</span>
      </div>
    </Card>
  );
};
export default UserItem;
