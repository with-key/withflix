import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Message = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Text = styled.div`
  font-size: 2.4rem;
`;

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
