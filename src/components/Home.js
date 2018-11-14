import React from "react";

const Home = props => {
  if (props.user.firstName) {
    return (
      <div>
        <h3>Hi {props.user.firstName}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Please Login!</h3>
    </div>
  );
};

export default Home;
