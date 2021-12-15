import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Popover, PopoverDisclosure } from 'reakit/Popover';
import { motion } from 'framer-motion';

type ContainerProps = {
  isVisible: boolean;
};

export const Wrapper = styled(motion.section)`
  @media (max-width: 500px) {
    position: relative;
  }
`;

export const Container = styled(Popover)<ContainerProps>`
  display: flex;

  @media (max-width: 500px) {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    top: calc(100% + 14px);
    left: -9rem;
    flex-direction: column;
    align-items: stretch;
    padding: 1.6rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
    background: #27333f;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: 0.2s;
    z-index: 2;

    ${({ isVisible }) =>
      isVisible &&
      css`
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      `}
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  font-size: 16px;
  color: #e1e1e6;
  transition: color 0.2s, border-color 0.2s;
  text-decoration: none;

  + a {
    margin-left: 12px;
  }

  &:hover {
    color: #e1e1e6;
  }

  &.active {
    font-weight: bold;
    color: #e1e1e6;
    font-weight: 600;
  }

  @media (max-width: 500px) {
    white-space: nowrap;
    padding: 0.8rem;

    + a {
      margin: 0.75em 0 0;
    }
  }
`;

export const Hamburguer = styled(PopoverDisclosure)<ContainerProps>`
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

    ${({ isVisible }) =>
      isVisible &&
      css`
        background: transparent;

        &:before {
          top: 0;
          transform: rotate(45deg);
        }

        &:after {
          top: 0;
          transform: rotate(-45deg);
        }
      `}
  }

  @media (min-width: 500px) {
    display: none;
  }
`;
