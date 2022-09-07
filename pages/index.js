import { Fragment, useEffect, useState } from "react";
import UserList from "../components/User/UserList";
import Wrapper from "../components/UI/Wrapper";
import UserForm from "../components/User/UserForm";
import TestForm from "../components/User/testForm";
import Button from "../components/UI/Button";

const Preview = (props) => {
  return (
    <Wrapper>
      <div className="preview">
        <div className="center">
          <h1>{props.title}</h1>
          <p>{props.openText}</p>
          <Button style={{ margin: "0 auto" }}>Sign up</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users/?page=1&count=6"
    );
    const data = await response.json();

    const loadedUsers = [...data.users];

    const sortedUsers = loadedUsers.sort((a, b) => {
      if (a.registration_timestamp > b.registration_timestamp) {
        return -1;
      }
    });

    setUsers(loadedUsers);
    setShowMore(data.links.next_url);

    console.log(data);

    console.log(loadedUsers);
    console.log(sortedUsers);
  };

  const showMoreHandler = async () => {
    const response = await fetch(`${showMore}`);
    const data = await response.json();

    const loadedUsers = [...data.users];

    const sortedUsers = loadedUsers.sort((a, b) => {
      if (a.registration_timestamp > b.registration_timestamp) {
        return -1;
      }
    });

    console.log(data);

    console.log(loadedUsers);
    console.log(sortedUsers);

    console.log([...users, ...sortedUsers]);

    setUsers([...users, ...sortedUsers]);
    setShowMore(data.links.next_url);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <Preview
        title={"Test assignment for front-end developer"}
        openText={
          "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving. "
        }
      />
      <Wrapper>
        {<UserList items={users} onShowMore={showMoreHandler} />}
        <UserForm />
        <TestForm />
      </Wrapper>
    </Fragment>
  );
};

export default HomePage;
