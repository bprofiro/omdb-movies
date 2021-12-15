import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Container = styled(motion.div)<ContainerProps>`
  width: 100%;

  span {
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #fbfbfb;
  }

  & + div {
    margin-top: 1.6rem;
  }
`;

export const InputContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 4rem;
  background: #1c1d21;
  border-radius: 0.4rem;
  border: 1px solid #fbfbfb99;
  color: #e1e1e6;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #00ace4;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #00ace4;
    `}

  input {
    flex: 1;
    padding: 16px;
    background: transparent;
    border: 0;
    color: #e1e1e6;

    &::placeholder {
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: #e1e1e6;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled.p`
  margin-top: 0.8rem;
  align-self: flex-start;
  font-size: 1.4rem;
  color: #c53030;
`;
