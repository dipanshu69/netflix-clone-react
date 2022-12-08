
import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const Container = styled.div`
  positions: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;

const Signup = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movie, TV shows and more</h1>
            <h4>Watch anywhere.Cancel anytime</h4>
            <h6>
              Ready to watch? Enter Your email to create or restart membership
            </h6>
          </div>
          <div className="from">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Get started</button>
          </div>
          <button>Log In</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;