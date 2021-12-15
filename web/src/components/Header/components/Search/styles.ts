import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Popover, PopoverDisclosure } from 'reakit/Popover';

type ContainerProps = {
  isVisible: boolean;
};

export const Container = styled(motion.section)`
  max-width: 40rem;
  min-width: 2rem;
  width: 100%;
  margin-right: 1.6rem;

  @media (max-width: 450px) {
    width: fit-content;
  }
`;

export const InputContainer = styled(Popover)<ContainerProps>`
  flex: 1;
  height: 4rem;
  border-radius: 0.4rem;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  padding: 0 1.8rem;

  font-size: 1.6rem;

  input {
    flex: 1;
    padding: 0 0 0 16px;
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

  @media (max-width: 450px) {
    display: none;

    ${({ isVisible }) =>
      isVisible &&
      css`
        display: flex;
      `}
  }

  @media (max-width: 390px) {
    padding: 0.5rem;

    input {
      padding: 0 0 0 1rem;
    }

    svg {
      display: none;
    }
  }
`;

export const Hamburguer = styled(PopoverDisclosure)`
  position: relative;
  width: 24px;
  height: 32px;
  background: none;
  border: 0;

  > div {
    position: relative;
    width: 100%;
    height: 3px;
    background: #737380;
    border-radius: 4px;
    transition: 0.2s ease;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 3px;
      background: #737380;
      border-radius: inherit;
      transition: inherit;
      transform-origin: 50% 50%;
    }

    &:before {
      top: -7px;
    }

    &:after {
      top: 7px;
    }
  }
`;
