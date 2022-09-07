import classes from "./MainHeader.module.css";

import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src="/images/logo.svg" />
          </div>
          <div className={classes.actions}>
            <Button>Users</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default MainHeader;
