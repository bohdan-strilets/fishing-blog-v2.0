import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import screenWidth from "utilities/screenWidth";

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: auto;

  @media screen and (min-width: ${screenWidth.tablet}) {
    height: 100vh;
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;

  min-height: 100%;

  color: var(--white-color);
  background-color: var(--black-transparent-color);

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: ${screenWidth.mobile};
  margin: 0 auto;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: ${screenWidth.tablet};
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: ${screenWidth.desktop};
  }
`;

export const Text = styled.p`
  width: 95%;
  margin-bottom: 10px;

  color: var(--gray-color);

  font-size: 13px;
  text-align: center;

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 80%;
    font-size: 16px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: 70%;
  }
`;

export const List = styled.ul`
  margin-top: var(--small-indent);
  margin-bottom: 10px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: var(--medium-indent);
    margin-bottom: 0;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    margin-top: var(--large-indent);
  }
`;

export const Item = styled.li`
  margin-bottom: var(--small-indent);

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    margin-right: var(--large-indent);
    margin-bottom: 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const Reference = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 290px;
  height: 40px;

  background-color: var(--gray-color);
  color: var(--black-color);
  border-radius: 3px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 22px 0px rgba(255, 255, 255, 0.1),
    2px 2px 10px -3px var(--black-transparent-color);
  outline: none;

  transition: background-color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--accent-color);
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 230px;
  }
`;
