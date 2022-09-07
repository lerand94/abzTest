import classes from "./UserList.module.css";

import UserItem from "./UserItem";
import { Fragment } from "react";
import Button from "../UI/Button";
import Title from "../UI/Title";

const UserList = (props) => {
  return (
    <Fragment>
      <Title text="Working with GET request" />
      <ul className={classes.list}>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            photo={user.photo}
            name={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
          />
        ))}
      </ul>
      <Button onClick={props.onShowMore} classname={classes.separator}>
        Show more
      </Button>
    </Fragment>
  );
};

export default UserList;
